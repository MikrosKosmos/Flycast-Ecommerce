drop procedure if exists sp_GetStates;
create procedure sp_GetStates()
BEGIN
    select id, state_name, state_code FROM tbl_StateMaster where is_active = 1;
end;