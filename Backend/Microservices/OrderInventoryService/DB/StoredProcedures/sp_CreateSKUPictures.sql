drop procedure if exists sp_CreateSKUPictures;
create procedure sp_CreateSKUPictures(parSku varchar(255), parImageUrl text, parPosition int, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        insert into tbl_SkuPictures (sku, position, image_url, created_by)
            value (parSku, parPosition, parImageUrl, parUserId);
        select 1 as id;
    else
        select -1 as id;
    end if;
end;