drop procedure if exists sp_tbl_OtpMaster;
create procedure sp_tbl_OtpMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OtpMaster'
        ) then
        create table tbl_OtpMaster
        (
            id           int primary key auto_increment,
            phone_number varchar(255)                        not null,
            otp          int                                 not null,
            validity     timestamp                           not null,
            is_active    tinyint   default 1,
            created_by   int                                 not null,
            created      timestamp default CURRENT_TIMESTAMP not null,
            modified_by  int       default null,
            modified     timestamp default null
        );
    end if;
    if not exists(
            select 1
            from information_schema.COLUMNS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OtpMaster'
              and COLUMN_NAME = 'extra_data'
        ) then
        alter table tbl_OtpMaster
            add column extra_data text default null after validity;
    end if;
end;
call sp_tbl_OtpMaster();
drop procedure if exists sp_tbl_OtpMaster;