drop procedure if exists sp_CreateVendorAccount;
create procedure sp_CreateVendorAccount(parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_UserMaster where id = parUserId and is_active = 1;
    if @isValid > 0 then
        set @roleId = 0;
        select id into @roleId from tbl_RoleMaster where role_name = 'Vendor';
        insert into tbl_UserRoleMapping (user_id, role_id, role_status, created_by)
            value (parUserId, @roleId, 3, parUserId);
        update tbl_UserMaster set modified_by=parUserId, modified=now() where id = parUserId;
        select last_insert_id() as id;
    else
        select -1 as id;
    end if;
end;