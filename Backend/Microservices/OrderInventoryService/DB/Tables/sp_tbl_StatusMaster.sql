drop procedure if exists sp_tbl_StatusMaster;
create procedure sp_tbl_StatusMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_StatusMaster'
        ) then
        create table tbl_StatusMaster
        (
            id          int primary key auto_increment,
            status_name varchar(255)                        not null,
            is_active   tinyint   default 1,
            created_by  int                                 not null,
            created     timestamp default CURRENT_TIMESTAMP not null,
            modified_by int       default null,
            modified    timestamp default null
        );
    end if;
end;
call sp_tbl_StatusMaster();
drop procedure if exists sp_tbl_StatusMaster;