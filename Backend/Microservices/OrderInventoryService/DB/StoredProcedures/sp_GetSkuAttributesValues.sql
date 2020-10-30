drop procedure if exists sp_GetSkuAttributesValues;
create procedure sp_GetSkuAttributesValues(parSku varchar(255))
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        set @assetId = 0;
        select id into @assetId from tbl_AssetMaster where sku = parSku and is_active = 1;
        select am.id as attribute_id,
               am.attribute_name,
               am.attribute_description,
               am.default_value,
               aav.attribute_value
        from tbl_AssetAttributeValue aav
                 left join tbl_AttributeMaster am
                           on aav.attribute_id = am.id
        where aav.asset_id = @assetId
          and am.is_active = 1
          and aav.is_active = 1;
    else
        select -1 as attribute_id;
    end if;
end;