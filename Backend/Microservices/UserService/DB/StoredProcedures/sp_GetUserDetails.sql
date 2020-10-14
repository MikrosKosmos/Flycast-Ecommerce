drop procedure if exists sp_GetUserDetails;
create procedure sp_GetUserDetails(parUserId int, parEmail varchar(255), parPhone varchar(15))
begin
    select u.id,
           u.first_name,
           u.last_name,
           u.gender,
           u.email,
           u.phone_number,
           u.referral_code,
           u.used_referral_code,
           rm.role_id,
           r.role_name,
           rm.role_status,
           sm.status_name
    from tbl_UserMaster u
             left join tbl_UserRoleMapping rm
                       on rm.user_id = u.id
             left join tbl_RoleMaster r
                       on r.id = rm.role_id
             left join tbl_StatusMaster sm
                       on sm.id = rm.role_status
    where u.id = parUserId
       or u.email = parEmail
       or u.phone_number = parPhone and u.is_active = 1 and rm.is_active = 1;
end;