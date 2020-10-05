drop procedure if exists sp_tbl_UserAddress;
create procedure sp_tbl_UserAddress()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_UserAddress'
        ) then
        create table tbl_UserAddress
        (
            id                    int primary key auto_increment,
            user_id               int                                      not null references tbl_UserMaster (id) on update cascade on delete set null,
            contact_person_name   varchar(255)                             not null,
            contact_phone_number  varchar(15)                              not null,
            address_1             varchar(255)                             not null,
            address_2             varchar(255)                             not null,
            city_id               int                                      not null,
            pincode               int                                      not null,
            gps_lat               decimal(18, 2) default null,
            gps_long              decimal(18, 2) default null,
            address_type          enum ('Commercial','Residential')        not null,
            delivery_instructions text           default null,
            is_default            tinyint        default 1                 not null,
            is_active             tinyint        default 1                 not null,
            created_by            int                                      not null,
            created               timestamp      default CURRENT_TIMESTAMP not null,
            modified_by           int            default null,
            modified              timestamp      default null
        );
    end if;
end;
call sp_tbl_UserAddress();
drop procedure if exists sp_tbl_UserAddress;