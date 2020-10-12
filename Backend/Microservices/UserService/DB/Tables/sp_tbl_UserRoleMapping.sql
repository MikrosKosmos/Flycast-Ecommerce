drop procedure if exists sp_tbl_UserRoleMapping;
create procedure sp_tbl_UserRoleMapping()
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
    if not exists(
            select 1
            from information_schema.COLUMNS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_UserRoleMapping'
              and COLUMN_NAME = 'role_status'
        ) then
        alter table tbl_UserRoleMapping
            add column role_status int default null after role_id;
        alter table tbl_UserRoleMapping
            add constraint FRGN_Status FOREIGN KEY (role_status) references tbl_StatusMaster (id);
    end if;
end;
call sp_tbl_UserRoleMapping();
drop procedure if exists sp_tbl_UserRoleMapping;