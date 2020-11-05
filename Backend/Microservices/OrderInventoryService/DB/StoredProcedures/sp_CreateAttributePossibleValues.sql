drop procedure if exists sp_CreateAttributePossibleValues;
create procedure sp_CreateAttributePossibleValues(parAttributeId int, parValues json, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_AttributeMaster where id = parAttributeId and is_active = 1;
    if @isValid > 0 then
        drop temporary table if exists TempValues;
        create temporary table TempValues
        (
            possibleValue varchar(255)
        );
        insert into TempValues (possibleValue) (
            select *
            from JSON_TABLE(parValues, '$[*]' COLUMNS (
                possibleValue varchar(255) path '$.possible_value'
                )) t);
        insert into tbl_AttributePossibleValues (attribute_id, possible_value, created_by)
        select parAttributeId, possibleValue, parUserId
        from TempValues;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;