drop procedure if exists sp_tbl_UserMaster;
create procedure sp_tbl_UserMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_UserMaster'
        ) then
        create table tbl_UserMaster
        (
            id                 int auto_increment primary key,
            first_name         varchar(255)                  not null,
            last_name          varchar(255)                  not null,
            gender             enum ('M','F','O'),
            email              varchar(255) unique default null,
            phone_number       varchar(255) unique           not null,
            referral_code      varchar(255)                  not null,
            used_referral_code varchar(255)        default null,
            is_active          tinyint             default 1 not null,
            created_by         int                           not null,
            created            timestamp           default current_timestamp,
            modified_by        int                 default null,
            modified           timestamp           default null
        );
    end if;
    if exists(
            select 1
            from information_schema.COLUMNS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_UserMaster'
              and COLUMN_NAME = 'user_status'
        ) then
        alter table tbl_UserMaster
            drop column user_status;
    end if;
end;
call sp_tbl_UserMaster();
drop procedure if exists sp_tbl_UserMaster;