drop procedure if exists sp_CreateAsset;
create procedure sp_CreateAsset(parAssetName varchar(255), parUniqueNumber varchar(255), parCategory int,
                                parSubCategory int, parSku varchar(255), parManufacturer varchar(255),
                                parProductGrade varchar(255), parLocation varchar(50),
                                parVendorId int, parProcurementPrice float, parBasePrice float, parSellingPrice float,
                                parAttributesJson json)
begin
    set @isExists = 0;
    set @isValidCategory = 0;
    set @isValidParentCategory = 0;
    #Validating the data.
    select id into @isExists from tbl_AssetMaster where asset_unique_number = parUniqueNumber and is_active = 1;
    select id into @isValidCategory from tbl_CategoryMaster where id = parCategory and is_active = 1;
    select id
    into @isValidParentCategory
    from tbl_CategoryMaster
    where id = parSubCategory
      and parent_category = parCategory
      and is_active = 1;
    if @isExists = 0 and @isValidParentCategory > 0 and @isValidCategory > 0 then
        set @assetId = 0;
        #inserting the asset.
        insert into tbl_AssetMaster(asset_unique_number, category, sub_category, sku, manufacturer, asset_name,
                                    product_grade, location, vendor_id, procurement_price, base_price, selling_price,
                                    asset_status, warranty_status, created_by)
            value (parUniqueNumber, parCategory, parSubCategory, parSku, parManufacturer, parAssetName,
                   parProductGrade, parLocation, parVendorId, parProcurementPrice, parBasePrice, parSellingPrice,
                   12, 15, parVendorId);
        select last_insert_id() into @assetId;
        #parsing the asset Attributes JSON.
        drop temporary table if exists TempAssetAttributes;
        create temporary table TempAssetAttributes
        (
            attributeId    int,
            attributeValue varchar(255)
        );
        insert into TempAssetAttributes (attributeId, attributeValue) (
            select t.*
            from JSON_TABLE(parAttributesJson, '$[*]' COLUMNS (
                attributeId int path '$.attribute_id',
                attributeValue varchar(255) path '$.attribute_value'
                )) t);
        insert into tbl_AssetAttributeValue (asset_id, attribute_id, attribute_value, created_by)
        select @assetId, attributeId, attributeValue, parVendorId
        from TempAssetAttributes;
        drop temporary table if exists TempAssetAttributes;
        set @isStockUpdated = 0;
        call sp_UpdateStock(parSku, parVendorId, 1, 1, @isStockUpdated);
        select @assetId as asset_id, @isStockUpdated as is_stock_updated;
    else
        select -1 as asset_id;
    end if;
end;