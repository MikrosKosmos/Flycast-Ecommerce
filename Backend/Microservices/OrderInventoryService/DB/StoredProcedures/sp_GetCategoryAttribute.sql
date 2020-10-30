drop procedure if exists sp_GetCategoryAttribute;
create procedure sp_GetCategoryAttribute(parCategoryId int)
begin
    if parCategoryId > 0 then
        select c.id  as category_id,
               c.category_name,
               c.category_description,
               c.parent_category,
               am.id as attribute_id,
               am.attribute_name,
               am.attribute_description,
               am.default_value
        from tbl_CategoryAttributeSet ca
                 left join tbl_CategoryMaster c
                           on ca.category_id = c.id
                 left join tbl_AttributeMaster am
                           on ca.attribute_id = am.id
        where c.id = parCategoryId
          and ca.is_active = 1
          and am.is_active = 1;
    else
        select -1 as category_id;
    end if;
end;