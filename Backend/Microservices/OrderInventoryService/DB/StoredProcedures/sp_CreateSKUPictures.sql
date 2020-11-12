drop procedure if exists sp_CreateSKUPictures;
create procedure sp_CreateSKUPictures(parSku varchar(255), parImageUrl text, parPosition int, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        set @isExits = 0;
        select id into @isExits from tbl_SkuPictures where sku = parSku and position = parPosition and is_active = 1;
        if @isExits > 0 then
            #Updating an existing image url .
            update tbl_SkuPictures
            set image_url=parImageUrl,
                modified=now(),
                modified_by=parUserId
            where sku = parSku
              and position = parPosition
              and is_active = 1;
        else
            #creating a new image url for the SKU.
            insert into tbl_SkuPictures (sku, position, image_url, created_by)
                value (parSku, parPosition, parImageUrl, parUserId);
        end if;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;