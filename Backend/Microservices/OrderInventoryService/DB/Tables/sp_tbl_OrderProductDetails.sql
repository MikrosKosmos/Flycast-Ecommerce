drop procedure if exists sp_tbl_OrderProductDetails;
create procedure sp_tbl_OrderProductDetails()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OrderProductDetails'
        ) then
        begin
            create table tbl_OrderProductDetails
            (
                id                   int primary key auto_increment,
                order_id             int                 not null,
                sku                  varchar(255)        not null,
                quantity             int                 not null,
                item_shipping_status int                 not null,
                is_active            tinyint   default 1 not null,
                created_by           int                 not null,
                created              timestamp default current_timestamp,
                modified_by          int       default null,
                modified             timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_OrderProductDetails();
drop procedure if exists sp_tbl_OrderProductDetails;