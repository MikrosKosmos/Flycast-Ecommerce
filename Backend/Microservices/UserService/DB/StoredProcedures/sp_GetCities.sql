drop procedure if exists sp_GetCities;
create procedure sp_GetCities(parName varchar(100), parStateId int)
BEGIN
    select concat(
                   'select id, country_id, state_id, city_name, city_org_id FROM tbl_CityMaster where city_name LIKE ''%',
                   parName, '%'' AND state_id =', parStateId)
    into @stmtSQL;
    #select @stmtSQL;
    PREPARE stmtExec from @stmtSQL;
    EXECUTE stmtExec;
    DEALLOCATE PREPARE stmtExec;
end;