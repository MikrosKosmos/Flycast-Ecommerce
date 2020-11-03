drop procedure if exists sp_GetStockAssetForSku;
create procedure sp_GetStockAssetForSku(parSku varchar(255), OUT parAssetId int)
begin
    set @isAvailable = 0;
    select id into @isAvailable from tbl_InventoryMaster where sku = parSku and stock_quantity > 0 and is_active = 1;
    if @isAvailable > 0 then
        select id into parAssetId from tbl_AssetMaster where sku = parSku and asset_status = 9 and is_active = 1;
    else
        set parAssetId = -1;
    end if;
end;