drop procedure if exists sp_CreateOrder;
create procedure sp_CreateOrder(parFlycastOrderId varchar(255), parOrderDate varchar(15), parUserId int,
                                parAddressId int, parBaseAmount float, parDiscount float, parTax float,
                                parReplaceOrderId int, parProductJson json)
begin
    set @isValid = 0;
    set @orderId = 0;
    select id into @isValid from tbl_OrderMaster where flycast_order_number = parFlycastOrderId and is_active = 1;
    if @isValid = 0 then
        #Creating the new order with pending status.
        insert into tbl_OrderMaster (flycast_order_number, order_date, user_id,
                                     shipping_address_id, order_base_amount, order_discount_amount, order_tax_amount,
                                     order_total_amount, order_status,
                                     replacement_order_id, created_by)
            value (parFlycastOrderId, parOrderDate, parUserId, parAddressId, parBaseAmount, parDiscount, parTax,
                   ((parBaseAmount - parDiscount) + parTax), 1, parReplaceOrderId, parUserId);
        select last_insert_id() into @orderId;
        drop temporary table if exists TempOrderProduct;
        create temporary table TempOrderProduct
        (
            skuId    int,
            sku      varchar(255),
            quantity int
        );
        insert into TempOrderProduct (sku, quantity)
            (select t.*
             from JSON_TABLE(parProductJson, '$[*]' COLUMNS (
                 sku varchar(255) path '$.sku',
                 quantity int path '$.quantity'
                 )) t);
        update TempOrderProduct p ,tbl_SkuMaster s
        set p.skuId=s.id
        where p.sku = s.sku
          and s.is_active = 1;
        #Creating the product details.
        insert into tbl_OrderProductDetails (order_id, sku, quantity, item_shipping_status, created_by)
        select @orderId, sku, quantity, 6, parUserId
        from TempOrderProduct
        where skuId > 0;
        drop temporary table if exists TempOrderProduct;
        select @orderId as order_id;
    else
        select -1 as order_id;
    end if;
end;