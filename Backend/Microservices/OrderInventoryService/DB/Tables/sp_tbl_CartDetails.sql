drop procedure if exists sp_tbl_CartDetails;
create procedure sp_tbl_CartDetails()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CartDetails'
        ) then
        begin
            create table tbl_CartDetails
            (
                id          int primary key auto_increment,
                cart_id     int                 not null,
                sku         varchar(255)        not null,
                quantity    int                 not null,
                is_active   tinyint   default 1 not null,
                created_by  int                 not null,
                created     timestamp default current_timestamp,
                modified_by int       default null,
                modified    timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_CartDetails();
drop procedure if exists sp_tbl_CartDetails;