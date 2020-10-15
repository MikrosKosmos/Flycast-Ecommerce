drop procedure if exists sp_GetUserAddress;
create procedure sp_GetUserAddress(parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_UserMaster where id = parUserId and is_active = 1;
    if @isValid > 0 then
        select ua.id as address_id,
               ua.user_id,
               ua.contact_person_name,
               ua.contact_phone_number,
               ua.address_1,
               ua.address_2,
               ua.city_id,
               cm.city_name,
               cm.state_id,
               sm.state_name,
               sm.state_code,
               ua.pincode,
               ua.gps_lat,
               ua.gps_long,
               ua.address_type,
               ua.delivery_instructions
        from tbl_UserMaster um
                 left join tbl_UserAddress ua
                           on ua.user_id = um.id
                 left join tbl_CityMaster cm
                           on cm.id = ua.city_id
                 left join tbl_StateMaster sm
                           on sm.id = cm.state_id
        where um.id = parUserId;

    else
        select -1 as id;
    end if;
end;