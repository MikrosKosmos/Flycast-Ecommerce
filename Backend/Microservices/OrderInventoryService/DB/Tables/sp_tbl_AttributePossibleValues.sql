drop procedure if exists sp_tbl_AttributePossibleValue;
create procedure sp_tbl_AttributePossibleValue()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_NAME = 'tbl_AttributePossibleValues'
              and TABLE_SCHEMA = currentSchema
        ) then
        begin
            create table tbl_AttributePossibleValues
            (
                id             int auto_increment primary key,
                attribute_id   int                 not null,
                possible_value varchar(255)        not null,
                is_active      tinyint   default 1 not null,
                created_by     int                 not null,
                created        timestamp default current_timestamp,
                modified_by    int       default null,
                modified       timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_AttributePossibleValue();
drop procedure if exists sp_tbl_AttributePossibleValue;