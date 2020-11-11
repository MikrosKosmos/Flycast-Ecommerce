drop procedure if exists sp_tbl_SkuMaster;
create procedure sp_tbl_SkuMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_SkuMaster'
        ) then
        begin
            create table tbl_SkuMaster
            (
                id              int primary key auto_increment,
                brand           varchar(255)          not null,
                model           varchar(255)          not null,
                color           varchar(255)          not null,
                product_grade   varchar(255)          not null,
                storage         varchar(25) default null,
                parent_category int         default null,
                sku             varchar(255)          not null,
                is_active       tinyint     default 1 not null,
                created_by      int                   not null,
                created         timestamp   default current_timestamp,
                modified_by     int         default null,
                modified        timestamp   default null
            );
        end;
    end if;
    if not exists(
            select 1
            from information_schema.STATISTICS
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_SkuMaster'
              and INDEX_NAME = 'IDX_sku'
        ) then
        create index IDX_sku on tbl_SkuMaster (sku);
    end if;
end;
call sp_tbl_SkuMaster();
drop procedure if exists sp_tbl_SkuMaster;