drop procedure if exists sp_GetAttributePossibleValues;
create procedure sp_GetAttributePossibleValues(parAttributeId int)
begin
    set @isValid = -1;
    select id into @isValid from tbl_AttributeMaster where id = parAttributeId and is_active = 1;
    if @isValid > 0 then
        select am.id,
               am.attribute_name,
               am.attribute_description,
               am.default_value,
               ap.possible_value
        from tbl_AttributeMaster am
                 left join tbl_AttributePossibleValues ap
                           on ap.attribute_id = am.id
        where am.id = parAttributeId
          and am.is_active = 1
          and ap.is_active = 1;
    else
        select -1 as id;
    end if;
end;