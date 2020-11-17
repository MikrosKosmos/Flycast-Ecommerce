drop procedure if exists sp_UpdateStock;
create procedure sp_UpdateStock(parSku varchar(255), parUserId int, parIsIncrement tinyint, parCounter int,
                                OUT parIsUpdated tinyint)
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        set @isExists = 0;
        select id into @isExists from tbl_InventoryMaster where sku = parSku and is_active = 1;
        if parIsIncrement = 0 then
            if @isExists > 0 then
                update tbl_InventoryMaster
                set stock_quantity = stock_quantity - parCounter,
                    modified=now(),
                    modified_by=parUserId
                where sku = parSku
                  and is_active = 1;
            end if;
        else
            if @isExists > 0 then
                update tbl_InventoryMaster
                set stock_quantity = stock_quantity + parCounter,
                    modified=now(),
                    modified_by=parUserId
                where sku = parSku
                  and is_active = 1;
            else
                set @price = 0;
                select selling_price into @price from tbl_AssetMaster where sku = parSku and is_active = 1 limit 1;
                insert into tbl_InventoryMaster (sku, stock_quantity, price, created_by)
                    value (parSku, parCounter, @price, parUserId);
            end if;
        end if;
        set parIsUpdated = 1;
    else
        set parIsUpdated = -1;
    end if;
end;