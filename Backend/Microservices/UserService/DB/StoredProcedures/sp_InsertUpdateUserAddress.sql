drop procedure if exists sp_InsertUpdateUserAddress;
create procedure sp_InsertUpdateUserAddress(parUserId int, parAddressId int, parAddress1 varchar(255),
                                            parAddress2 varchar(255),
                                            parCityId int, parPincode int, parContactPersonName varchar(255),
                                            parContactPersonNumber varchar(15),
                                            parAddressType enum ('Commercial','Residential',''),
                                            parGpsLat decimal(18, 2), parGpsLong decimal(18, 2),
                                            parDeliveryInstruction text, parIsDefault tinyint)
begin
    set @isUserValid = 0;
    select id into @isUserValid from tbl_UserMaster where id = 1 and is_active = 1;
    if @isUserValid > 0 then
        if parAddressId > 0 then
            set @setClaus = '';
            if length(parAddress1) > 0 then
                set @setClaus = concat(@setClaus, 'address_1 = ''', parAddress1, ''',');
            end if;
            if length(parAddress2) > 0 then
                set @setClaus = concat(@setClaus, ' address_2 = ''', parAddress2, ''',');
            end if;
            if parCityId > 0 then
                set @setClaus = concat(@setClaus, ' city_id = ', parCityId, ', ');
            end if;
            if parPincode > 0 then
                set @setClaus = concat(@setClaus, ' pincode = ', parPincode, ' , ');
            end if;
            if length(parContactPersonName) > 0 then
                set @setClaus = concat(@setClaus, 'contact_person_name = ''', parContactPersonName, ''',');
            end if;
            if length(parContactPersonNumber) > 0 then
                set @setClaus = concat(@setClaus, 'contact_phone_number = ''', parContactPersonNumber, ''',');
            end if;
            if length(parAddressType) > 0 then
                set @setClaus = concat(@setClaus, 'address_type = ''', parAddressType, ''',');
            end if;
            if length(parDeliveryInstruction) > 0 then
                set @setClaus = concat(@setClaus, 'delivery_instructions = ''', parDeliveryInstruction, ''',');
            end if;
            if parIsDefault > 0 then
                update tbl_UserAddress
                set is_default=0,
                    modified=now(),
                    modified_by=parUserId
                where user_id = parUserId;
                set @setClaus = concat(@setClaus, 'is_default = 1', ',');
            end if;
            set @setClaus = substr(@setClaus, 1, length(@setClaus) - 1);
            select concat('update tbl_UserAddress set ', @setClaus, ',modified = now(),modified_by = ', parUserId,
                          ' where id = ', parAddressId, ' and user_id =', parUserId, ' and is_active =1')
            into @stmtSQL;
            #select @stmtSQL;
            prepare stmtExec from @stmtSQL;
            execute stmtExec;
            deallocate prepare stmtExec;
            select 1 as id;
        else
            if parIsDefault > 0 then
                update tbl_UserAddress
                set is_default=0,
                    modified_by=parUserId,
                    modified=now()
                where user_id = parUserId
                  and is_active = 1;
            end if;
            insert into tbl_UserAddress (user_id, contact_person_name, contact_phone_number, address_1, address_2,
                                         city_id, pincode, gps_lat, gps_long, address_type, delivery_instructions,
                                         is_default, created_by)
                value (parUserId, parContactPersonName, parContactPersonNumber, parAddress1, parAddress2,
                       parCityId, parPincode, parGpsLat, parGpsLong, parAddressType, parDeliveryInstruction,
                       parIsDefault, parUserId);
            select last_insert_id() as id;
        end if;
    else
        select -1 as id;
    end if;
end;