drop procedure if exists sp_GetAttributesBySKU;
create procedure sp_GetAttributesBySKU(parSKU varchar(255))
begin
   set @isValid = 0;
   select id into @isValid from tbl_SkuMaster where sku = parSKU and is_active = 1;
   if @isValid > 0 then
      set @assetId = 0;
      select id into @assetId from tbl_AssetMaster where sku = parSKU and is_active = 1;
      select am.id,
             am.attribute_name,
             am.attribute_description,
             am.default_value,
             av.attribute_value
      from tbl_AssetAttributeValue av
              left join tbl_AttributeMaster am
                        on av.attribute_id = am.id
      where av.asset_id = @assetId
        and av.is_active = 1;
   else
      select -1 as id;
   end if;
end;