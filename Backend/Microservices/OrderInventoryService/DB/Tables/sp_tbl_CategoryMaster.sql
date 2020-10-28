drop procedure if exists sp_tbl_CategoryMaster;
create procedure sp_tbl_CategoryMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CategoryMaster'
        ) then
        begin
            create table tbl_CategoryMaster
            (
                id                   int primary key auto_increment,
                category_name        varchar(255)           not null,
                category_description varchar(255) default null,
                parent_category      int          default null,
                is_active            tinyint      default 1 not null,
                created_by           int                    not null,
                created              timestamp    default current_timestamp,
                modified_by          int          default null,
                modified             timestamp    default null
            );
        end;
    end if;
end;
call sp_tbl_CategoryMaster();
drop procedure if exists sp_tbl_CategoryMaster;