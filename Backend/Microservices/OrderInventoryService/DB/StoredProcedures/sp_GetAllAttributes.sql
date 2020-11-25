drop procedure if exists sp_GetAllAttributes;
create procedure sp_GetAllAttributes()
begin
    select am.id as attribute_id,
           am.attribute_name,
           am.attribute_description,
           am.default_value,
           ifnull(ap.possible_value, 'NA')
    from tbl_AttributeMaster am
             left join tbl_AttributePossibleValues ap
                       on ap.attribute_id = am.id
    where am.is_active = 1;
end;