drop procedure if exists sp_GetSKUPictures;
create procedure sp_GetSKUPictures(parSku varchar(100))
begin
    select sp.id,
           skM.sku,
           position,
           image_url
    from tbl_SkuMaster skM
             left join tbl_SkuPictures sp
                       on sp.sku = skM.sku
                           and sp.is_active = 1
    where skM.sku = parSku
      and sp.is_active = 1;
end;