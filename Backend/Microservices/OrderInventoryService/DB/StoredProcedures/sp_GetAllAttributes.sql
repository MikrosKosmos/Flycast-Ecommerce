drop procedure if exists sp_GetAllAttributes;
create procedure sp_GetAllAttributes()
begin
    select am.id as attribute_id,
           am.attribute_name,
           am.attribute_description,
           am.default_value
    from tbl_AttributeMaster am
    where am.is_active = 1;
end;