drop procedure if exists sp_CreateCategory;
create procedure sp_CreateCategory(parCategories json, parUserId int)
begin
    drop temporary table if exists TempCategory;
    create temporary table TempCategory
    (
        categoryName        varchar(255),
        categoryDescription varchar(255),
        parentCategory      int
    );
    insert into TempCategory(
        select t.*
        from JSON_TABLE(parCategories, '$[*]' COLUMNS (
            categoryName varchar(255) path '$.category_name',
            categoryDescription varchar(255) path '$.category_description',
            parentCategory int path '$.parent_category'
            )) t);
    insert into tbl_CategoryMaster (category_name, category_description, parent_category, created_by)
    select categoryName, categoryDescription, parentCategory, parUserId
    from TempCategory;
    select 1 as id;
end;