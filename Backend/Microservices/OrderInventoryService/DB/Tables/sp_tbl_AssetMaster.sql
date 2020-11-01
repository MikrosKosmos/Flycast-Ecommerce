drop procedure if exists sp_tbl_AssetMaster;
create procedure sp_tbl_AssetMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_AssetMaster'
        ) then
        begin
            create table tbl_AssetMaster
            (
                id                  int primary key auto_increment,
                asset_unique_number varchar(255)           not null,
                category          int                    not null,
                sub_category      int          default null,
                sku               varchar(255)           not null,
                manufacturer      varchar(255) default null,
                asset_name        varchar(255)           not null,
                product_grade     varchar(255) default null,
                location          varchar(50)  default null,
                vendor_id         int                    not null,
                procurement_price float(10, 2) default 0.0,
                base_price        float(10, 2) default 0.0,
                selling_price     float(10, 2)           not null,
                warranty_status   int                    not null,
                is_active         tinyint      default 1 not null,
                created_by        int                    not null,
                created           timestamp    default current_timestamp,
                modified_by       int          default null,
                modified          timestamp    default null
            );
        end;
    end if;
    if not exists(
            select 1
            from information_schema.COLUMNS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_AssetMaster'
              and COLUMN_NAME = 'asset_status'
        ) then
        alter table tbl_AssetMaster
            add column asset_status int not null after selling_price;
    end if;
end;
call sp_tbl_AssetMaster();
drop procedure if exists sp_tbl_AssetMaster;