drop procedure if exists sp_tbl_OrderAssetDetails;
create procedure sp_tbl_OrderAssetDetails()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OrderAssetDetails'
        ) then
        begin
            create table tbl_OrderAssetDetails
            (
                id                int primary key auto_increment,
                order_details_id  int                 not null,
                asset_id          int                 not null,
                replaced_order_id int       default null,
                is_active         tinyint   default 1 not null,
                created_by        int                 not null,
                created           timestamp default current_timestamp,
                modified_by       int       default null,
                modified          timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_OrderAssetDetails();
drop procedure if exists sp_tbl_OrderAssetDetails;