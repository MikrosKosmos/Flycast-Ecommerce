drop procedure if exists sp_tbl_CategoryAttributeSet;
create procedure sp_tbl_CategoryAttributeSet()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_NAME = 'tbl_CategoryAttributeSet'
              and TABLE_SCHEMA = currentSchema
        ) then
        begin
            create table tbl_CategoryAttributeSet
            (
                id           int primary key auto_increment,
                category_id  int                 not null,
                attribute_id int                 not null,
                is_active    tinyint   default 1 not null,
                created_by   int                 not null,
                created      timestamp default current_timestamp,
                modified_by  int       default null,
                modified     timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_CategoryAttributeSet();
drop procedure if exists sp_tbl_CategoryAttributeSet;