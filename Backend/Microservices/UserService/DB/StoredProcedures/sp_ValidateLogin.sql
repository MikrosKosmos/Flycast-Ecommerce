drop procedure if exists sp_ValidateLogin;
create procedure sp_ValidateLogin(parPhone varchar(15), parOTP int, parEmail varchar(255), parPassword varchar(255))
begin
    if length(parPhone) > 0 and parOTP > 0 then
        set @isValid = -1, @extraData = '';
        call sp_CheckOTP(parPhone, parOTP, @isValid, @extraData);
        if @isValid > 0 then
            delete from tbl_OtpMaster where phone_number=parPhone and otp=parOTP;
            select u.id,
                   u.first_name,
                   last_name,
                   gender,
                   email,
                   phone_number,
                   referral_code,
                   used_referral_code,
                   role_id,
                   rm.role_name,
                   role_status,
                   sm.status_name
            from tbl_UserMaster u
                     left join tbl_UserRoleMapping r
                               on r.user_id = u.id
                     left join tbl_RoleMaster rm
                               on rm.id = r.role_id
                     left join tbl_StatusMaster sm
                               on sm.id = r.role_status
            where u.phone_number = parPhone
              and u.is_active = 1;
        else
            select -1 as id;
        end if;
    elseif length(parEmail) > 0 and length(parPassword) > 0 then
        set @isValid = -1;
        select id
        into @isValid
        from tbl_LoginMaster
        where email = parEmail
          and password = parPassword
          and is_active = 1;
        if @isValid > 0 then
            select u.id,
                   u.first_name,
                   last_name,
                   gender,
                   u.email,
                   u.phone_number,
                   referral_code,
                   used_referral_code,
                   role_id,
                   rm.role_name,
                   role_status,
                   sm.status_name
            from tbl_UserMaster u
                     left join tbl_UserRoleMapping r
                               on r.user_id = r.user_id
                     left join tbl_RoleMaster rm
                               on rm.id = r.role_id
                     left join tbl_StatusMaster sm
                               on sm.id = r.role_status
                     left join tbl_LoginMaster lm
                               on lm.email = u.email and lm.user_id = u.id
            where u.email = parEmail
              and lm.password = parPassword
              and lm.email = parEmail
              and u.is_active = 1
              and lm.is_active = 1;
        else
            select -1 as id;
        end if;
    end if;
end;