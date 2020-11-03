drop procedure if exists sp_AssignProductToOrder;
create procedure sp_AssignProductToOrder(parOrderId int)
begin
    declare i int default 0;
    declare j int default 0;
    set @isValid = 0;
    select id into @isValid from tbl_OrderMaster where id = parOrderId and is_active = 1;
    if @isValid > 0 then
        set @noOfProducts = 0;
        select count(id) into @noOfProducts from tbl_OrderProductDetails where order_id = parOrderId and is_active = 1;
        while i < @noOfProducts
            do
                set @quantity = 0;
                set @orderDetailsId = 0;
                set @skuVal = '';
                select quantity, id, sku
                into @quantity, @orderDetailsId,@skuVal
                from tbl_OrderProductDetails
                where order_id = parOrderId
                  and is_active = 1
                limit i,1;
                set i = i + 1;
                set j = 0;
                while j < @quantity
                    do
                        set @assetId = -1;
                        call sp_GetStockAssetForSku(@skuVal, @assetId);
                        if @assetId > 0 then
                            insert into tbl_OrderAssetDetails(order_details_id, asset_id, created_by)
                                value (@orderDetailsId, @assetId, 1);
                            #updating the asset status.
                            update tbl_AssetMaster
                            set asset_status=10,
                                modified=now(),
                                modified_by=1
                            where id = @assetId
                              and is_active = 1;
                            #Updating the order status and item shipping status.
                            update tbl_OrderProductDetails od, tbl_OrderMaster om
                            set item_shipping_status = 6,
                                om.order_status      = 6,
                                om.modified=now(),
                                om.modified_by=1,
                                od.modified_by=1,
                                od.modified=now()
                            where id = @orderDetailsId
                              and om.id = od.order_id
                              and om.is_active = 1
                              and od.is_active = 1;
                            call sp_UpdateStock(@skuVal, 1, 0, 1, @isUpdated);
                        end if;
                        set j = j + 1;
                    end while;
            end while;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;