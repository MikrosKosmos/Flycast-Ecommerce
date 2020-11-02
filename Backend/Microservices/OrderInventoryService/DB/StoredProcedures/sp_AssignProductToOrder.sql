drop procedure if exists sp_AssignProductToOrder;
create procedure sp_AssignProductToOrder(parOrderId int)
begin
    declare i int default 0;
    declare j int default 0;
    set @isValid = 1;
    #select id into @isValid from tbl_OrderMaster where id = parOrderId and is_active = 1;
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
                        insert into tbl_OrderAssetDetails(order_details_id, asset_id, created_by)
                            value (@orderDetailsId, 0, 1);
                        set j = j + 1;
                    end while;
            end while;
    else
        select -1 as id;
    end if;
end;