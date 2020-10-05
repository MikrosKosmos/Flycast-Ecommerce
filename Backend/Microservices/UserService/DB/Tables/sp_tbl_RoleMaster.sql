drop procedure if exists sp_tbl_RoleMaster;
create procedure sp_tbl_RoleMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_RoleMaster'
        ) then
        create table tbl_RoleMaster
        (
            id             int auto_increment primary key,
            role_name      varchar(255)                        not null,
            role_code_name varchar(255)                        not null,
            is_active      tinyint   default 1                 not null,
            created_by     int                                 not null,
            created        timestamp default current_timestamp not null,
            modified_by    int       default null,
            modified       timestamp default null
        );
    end if;
end;
call sp_tbl_RoleMaster();
drop procedure if exists sp_tbl_RoleMaster;