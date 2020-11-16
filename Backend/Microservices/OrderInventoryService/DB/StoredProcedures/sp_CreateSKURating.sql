drop procedure if exists sp_CreateSKURating;
create procedure sp_CreateSKURating(parSku varchar(255), parRating int, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        #Creating the rating record.
        set @isExists = 0;
        select id into @isExists from tbl_SkuRatingDetails where sku = parSku and user_id = parUserId and is_active = 1;
        if @isExists = 0 then
            insert into tbl_SkuRatingDetails (user_id, sku, rating, created_by)
                value (parUserId, parSku, parRating, parUserId);
        else
            update tbl_SkuRatingDetails
            set rating=parRating,
                modified_by=parUserId,
                modified=now()
            where sku = parSku
              and user_id = parUserId
              and is_active = 1;
        end if;
        set @avgRating = 1;
        select avg(rating) into @avgRating from tbl_SkuRatingDetails where sku = parSku and is_active = 1;
        #updating the average rating.
        update tbl_SkuMaster
        set average_rating=@avgRating,
            modified_by=parUserId,
            modified      = now()
        where sku = parSku
          and is_active = 1;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;