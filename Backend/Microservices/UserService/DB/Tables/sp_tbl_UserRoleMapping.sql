drop procedure if exists sp_tbl_UserRoleMapping;
create procedure sp_tbl_RoleMapping()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_UserRoleMapping'
        ) then
        create table tbl_UserRoleMapping
        (
            id          int primary key auto_increment,
            user_id     int                                 not null references tbl_UserMaster (id) on update cascade on delete set null,
            role_id     int                                 not null references tbl_RoleMaster (id) on update cascade on delete set null,
            is_active   tinyint   default 1                 not null,
            created_by  int                                 not null,
            created     timestamp default CURRENT_TIMESTAMP not null,
            modified_by int       default null,
            modified    timestamp default null
        );
    end if;
end;
call sp_tbl_RoleMapping();
drop procedure if exists sp_tbl_RoleMapping;