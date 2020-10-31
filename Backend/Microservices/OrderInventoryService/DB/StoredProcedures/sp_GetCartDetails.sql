drop procedure if exists sp_GetCartDetails;
create procedure sp_GetCartDetails(parUserId int)
begin
    set @isExists = 0;
    select id into @isExists from tbl_CartMaster where user_id = parUserId and is_active = 1;
    if @isExists > 0 then
        select cm.id,
               cm.user_id,
               cm.total_products,
               cd.sku,
               sm.brand,
               sm.model,
               sm.color,
               sm.product_grade,
               sm.storage,
               sm.parent_category,
               catm.id              as category_id,
               category_name        as parent_category_name,
               category_description as parent_category_description,
               cd.quantity
        from tbl_CartMaster cm
                 left join tbl_CartDetails cd
                           on cd.cart_id = cm.id
                 left join tbl_SkuMaster sm
                           on cd.sku = sm.sku
                 left join tbl_CategoryMaster catm
                           on sm.parent_category = catm.id
        where cm.user_id = parUserId
          and cm.is_active = 1
          and cd.is_active = 1;
    else
        select -1 as id;
    end if;
end;