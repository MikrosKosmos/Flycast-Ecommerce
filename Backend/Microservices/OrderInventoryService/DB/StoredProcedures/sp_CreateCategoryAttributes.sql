drop procedure if exists sp_CreateCategoryAttributes;
create procedure sp_CreateCategoryAttributes(parCategoryId int, parAttributesJSON json, parUserId int)
begin
    set @isValid = 0;
    select length(parAttributesJSON) into @isValid;
    if @isValid > 0 then
        drop temporary table if exists TempAttributes;
        create temporary table TempAttributes
        (
            attributeId int
        );
        insert into TempAttributes(attributeId)
            (select t.*
             from JSON_TABLE(parAttributesJSON, '$[*]' COLUMNS (
                 attributeId int path '$.attribute_id'
                 )) t);
        insert into tbl_CategoryAttributeSet (category_id, attribute_id, created_by)
        select parCategoryId, attributeId, parUserId
        from TempAttributes;
        drop temporary table if exists TempAttributes;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;