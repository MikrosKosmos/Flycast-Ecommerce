drop procedure if exists sp_GetOrderDetails;
create procedure sp_GetOrderDetails(parUserId int)
begin
    select om.id,
           om.flycast_order_number,
           om.order_date,
           om.delivery_date,
           om.invoice_id,
           om.user_id,
           om.shipping_address_id,
           om.order_base_amount,
           om.order_discount_amount,
           om.order_total_amount,
           om.dispatch_before,
           om.waybill_number,
           om.order_status,
           s.status_name   as order_status_name,
           om.replacement_order_id,
           op.sku,
           quantity,
           item_shipping_status,
           ism.status_name as item_shipping_status_name,
           sp.image_url,
           sp.position,
           im.price
    from tbl_OrderMaster om
             left join tbl_OrderProductDetails op
                       on op.order_id = om.id
             left join tbl_SkuMaster sm
                       on op.sku = sm.sku
             left join tbl_SkuPictures sp
                       on sp.sku = op.sku
                           and sp.is_active = 1
             left join tbl_InventoryMaster im
                       on im.sku = op.sku
             left join tbl_StatusMaster s
                       on om.order_status = s.id
             left join tbl_StatusMaster ism
                       on op.item_shipping_status = ism.id
    where om.user_id = parUserId
      and om.is_active = 1;
end;