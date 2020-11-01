drop procedure if exists sp_tbl_OrderMaster;
create procedure sp_tbl_OrderMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OrderMaster'
        ) then
        begin
            create table tbl_OrderMaster
            (
                id                    int primary key auto_increment,
                flycast_order_number  varchar(255) unique    not null,
                order_date            date                   not null,
                delivery_date         date         default null,
                invoice_id            int          default null,
                user_id               int                    not null,
                shipping_address_id   int                    not null,
                order_base_amount     float                  not null,
                order_discount_amount float        default 0,
                order_tax_amount      float                  not null,
                order_total_amount    float                  not null null,
                dispatch_before       date         default null,
                waybill_number        varchar(255) default null,
                order_status          int                    not null,
                replacement_order_id  int          default 0,
                is_active             tinyint      default 1 not null,
                created_by            int                    not null,
                created               timestamp    default current_timestamp,
                modified_by           int          default null,
                modified              timestamp    default null
            );
        end;
    end if;
end;
call sp_tbl_OrderMaster();
drop procedure if exists sp_tbl_OrderMaster;