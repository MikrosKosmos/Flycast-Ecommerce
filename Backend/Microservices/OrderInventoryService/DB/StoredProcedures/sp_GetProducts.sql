drop procedure if exists sp_GetProducts;
create procedure sp_GetProducts(parCategory int)
begin
    if parCategory = 0 then
        select sm.id,
               sm.brand,
               sm.model,
               sm.color,
               sm.product_grade,
               sm.storage,
               im.stock_quantity,
               cm.id as category_id,
               cm.category_name,
               sm.sku,
               sp.image_url,
               sp.position
        from tbl_SkuMaster sm
                 left join tbl_CategoryMaster cm
                           on sm.parent_category = cm.id
                 left join tbl_SkuPictures sp
                           on sp.sku = sm.sku
                               and sp.is_active = 1
                 left join tbl_InventoryMaster im
                           on im.sku = sm.sku
        where sm.is_active = 1;
    else
        select sm.id,
               sm.brand,
               sm.model,
               sm.color,
               sm.product_grade,
               sm.storage,
               im.stock_quantity,
               cm.id as category_id,
               cm.category_name,
               sm.sku,
               im.price
        from tbl_SkuMaster sm
                 left join tbl_CategoryMaster cm
                           on sm.parent_category = cm.id
                 inner join tbl_InventoryMaster im
                            on im.sku = sm.sku
        where sm.is_active = 1
          and sm.parent_category = parCategory;
    end if;
end;