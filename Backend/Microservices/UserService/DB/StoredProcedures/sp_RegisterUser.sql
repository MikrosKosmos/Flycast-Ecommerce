drop procedure if exists sp_RegisterUser;
create procedure sp_RegisterUser(parFirstName varchar(255), parLastName varchar(255), parPhone varchar(15),
                                 parEmail varchar(255), parPassword varchar(255), parGender varchar(1), parRoleId int,
                                 parReferralCode varchar(8),
                                 parUsedReferralCode varchar(8))
begin
    set @isExists = 0;
    set @whereClaus = '';
    if length(parEmail) > 0 then
        set @whereClaus = concat(@whereClaus, ' email = ''', parEmail, ''' and ');
    end if;
    if length(parPhone) > 0 then
        set @whereClaus = concat(@whereClaus, ' phone_number = ''', parPhone, ''' and ');
    end if;
    #checking whether the email or phone already registered.
    select concat('select id into @isExists from tbl_LoginMaster where ', @whereClaus
               , ' is_active = 1')
    into @stmtSQL;
    #select @stmtSQL;
    prepare stmtExec from @stmtSQL;
    execute stmtExec;
    deallocate prepare stmtExec;
    if @isExists > 0 then
        select -1 as id;
    else
        set @userId = 0;
        set @isRoleValid = 0;
        select id into @isRoleValid from tbl_RoleMaster where id = parRoleId and is_active = 1;
        if @isRoleValid > 0 then
            #inserting into tbl_UserMaster;
            insert into tbl_UserMaster (first_name, last_name, gender, email, phone_number, referral_code,
                                        used_referral_code, created_by)
                value (parFirstName, parLastName, parGender, parEmail, parPhone, parReferralCode, parUsedReferralCode,
                       1);
            select LAST_INSERT_ID() into @userId;
            #inserting into tbl_roleMapping.
            insert into tbl_UserRoleMapping (user_id, role_id, role_status, created_by)
                value (@userId, parRoleId, 1, @userId);
            #Creating the login details.
            insert into tbl_LoginMaster (user_id, email, phone_number, password, last_login_time, created_by)
                value (@userId, parEmail, parPhone, parPassword, now(), @userId);
            select @userId as id;
        else
            #invalid role.
            select -1 as id;
        end if;
    end if;
end;