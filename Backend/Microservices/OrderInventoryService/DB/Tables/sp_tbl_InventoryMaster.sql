drop procedure if exists sp_tbl_InventoryMaster;
create procedure sp_tbl_InventoryMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_InventoryMaster'
        ) then
        begin
            create table tbl_InventoryMaster
            (
                id             int primary key auto_increment,
                sku            varchar(255) not null,
                stock_quantity int          not null default 0,
                remarks        text                  default null,
                is_active      tinyint               default 1 not null,
                created_by     int          not null,
                created        timestamp             default current_timestamp,
                modified_by    int                   default null,
                modified       timestamp             default null
            );
        end;
    end if;
    if not exists(
            select 1
            from information_schema.COLUMNS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_InventoryMaster'
              and COLUMN_NAME = 'price'
        ) then
        alter table tbl_InventoryMaster
            add column price float default 0.0 after stock_quantity;
    end if;
end;
call sp_tbl_InventoryMaster();
drop procedure if exists sp_tbl_InventoryMaster;