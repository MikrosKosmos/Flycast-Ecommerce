drop procedure if exists sp_CreateSKU;
create procedure sp_CreateSKU(parBrand varchar(255), parModel varchar(255), parColor varchar(255),
                              parGrade varchar(255),
                              parStorage varchar(255), parParentCategory int, parImageUrl text, parPosition int,
                              parUser int)
begin
    set @parentCatName = '';
    #Checking for valid category.
    select category_name into @parentCatName from tbl_CategoryMaster where id = parParentCategory and is_active = 1;
    if length(@parentCatName) > 0 then
        set @sku = '';
        #Checking if all the valid details are present.
        if length(parBrand) > 0 and length(parModel) > 0 and length(parColor) > 0 and length(parGrade) > 0 then
            set @sku = concat('FC-', lower(parBrand), '-', lower(parModel), '-', lower(parColor), '-', lower(parGrade));
            if length(parStorage) > 0 then
                set @sku = concat(@sku, '-', parStorage);
            end if;
            insert into tbl_SkuMaster (brand, model, color, product_grade, storage, parent_category, sku, created_by)
                value (parBrand, parModel, parColor, parGrade, parStorage, parParentCategory, @sku, parUser);
            select last_insert_id() as id;
            if length(parImageUrl) > 0 then
                insert into tbl_SkuPictures (sku, position, image_url, created_by)
                    value (@sku, parPosition, parImageUrl, parUser);
            end if;
        else
            select -1 as id;
        end if;
    else
        select -1 as id;
    end if;
end;