drop procedure if exists sp_CreateSKURating;
create procedure sp_CreateSKURating(parSku varchar(255), parRating int, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValid > 0 then
        #Creating the rating record.
        insert into tbl_SkuRatingDetails (user_id, sku, rating, created_by)
            value (parUserId, parSku, parRating, parUserId);
        set @avgRating = 1;
        select avg(rating) into @avgRating from tbl_SkuRatingDetails where sku = parSku and is_active = 1;
        #updating the average rating.
        update tbl_SkuMaster set average_rating=@avgRating, modified = now() where sku = parSku and is_active = 1;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;