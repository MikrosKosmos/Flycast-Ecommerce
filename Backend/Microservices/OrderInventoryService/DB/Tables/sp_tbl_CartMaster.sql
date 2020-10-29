drop procedure if exists sp_tbl_CartMaster;
create procedure sp_tbl_CartMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CartMaster'
        ) then
        create table tbl_CartMaster
        (
            id             int auto_increment primary key,
            user_id        int                 not null,
            total_products int       default null,
            is_active      tinyint   default 1 not null,
            created_by     int                 not null,
            created        timestamp default current_timestamp,
            modified_by    int       default null,
            modified       timestamp default null
        );
    end if;
end;
call sp_tbl_CartMaster();
drop procedure if exists sp_tbl_CartMaster;