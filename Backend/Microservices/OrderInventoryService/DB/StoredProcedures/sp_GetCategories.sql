drop procedure if exists sp_GetCategories;
create procedure sp_GetCategories(parCategoryId int)
begin
    if parCategoryId > 0 then
        select id, category_name, category_description, parent_category
        from tbl_CategoryMaster
        where id = parCategoryId
          and is_active = 1;
    else
        select id, category_name, category_description, parent_category
        from tbl_CategoryMaster
        where is_active = 1;
    end if;
end;