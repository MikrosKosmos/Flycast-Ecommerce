drop procedure if exists sp_CreateAttribute;
create procedure sp_CreateAttribute(parAttributesJson json, parUserId int)
begin
    set @isValid = 0;
    select length(parAttributesJson) into @isValid;
    if @isValid > 0 then
        drop temporary table if exists TempAttributes;
        create temporary table TempAttributes
        (
            attributeName varchar(255),
            attributeDesc varchar(255),
            defaultValue  varchar(255)
        );
        #Parsing the JSON to table.
        insert into TempAttributes (attributeName, attributeDesc, defaultValue) (
            select t.*
            from JSON_TABLE(parAttributesJson, '$[*]' COLUMNS (
                attributeName varchar(255) path '$.attribute_name',
                attributeDesc varchar(255) path '$.attribute_description',
                defaultValue varchar(255) path '$.default_value'
                )) t);
        #Inserting into the attribute table.
        insert into tbl_AttributeMaster (attribute_name, attribute_description, default_value, created_by)
        select attributeName, attributeDesc, defaultValue, parUserId
        from TempAttributes;
        drop temporary table if exists TempAttributes;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;