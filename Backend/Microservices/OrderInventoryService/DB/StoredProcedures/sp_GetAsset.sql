drop procedure if exists sp_GetAsset;
create procedure sp_GetAsset(parAssetId int)
begin
    select am.id,
           am.asset_unique_number,
           am.category,
           cm.category_name,
           am.sub_category,
           am.sku,
           sk.brand,
           sk.model,
           sk.color,
           sk.product_grade,
           sk.storage,
           sk.parent_category,
           am.manufacturer,
           am.asset_name,
           am.product_grade,
           am.location,
           am.vendor_id,
           am.procurement_price,
           am.base_price,
           am.selling_price,
           am.asset_status,
           sm.status_name,
           am.warranty_status,
           at.id as attribute_id,
           at.attribute_name,
           at.attribute_description,
           at.default_value,
           av.attribute_value
    from tbl_AssetMaster am
             left join tbl_SkuMaster sk
                       on am.sku = sk.sku
             left join tbl_AssetAttributeValue av
                       on av.asset_id = am.id
             left join tbl_AttributeMaster at
                       on at.id = av.attribute_id
             left join tbl_StatusMaster sm
                       on sm.id = am.asset_status
             left join tbl_CategoryMaster cm
                       on cm.id = am.category
    where am.id = parAssetId
      and am.is_active = 1;
end;