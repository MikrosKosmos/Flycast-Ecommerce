drop procedure if exists sp_tbl_SkuPictures;
create procedure sp_tbl_SkuPictures()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_SkuPictures'
        ) then
        create table tbl_SkuPictures
        (
            id          int auto_increment primary key,
            sku         varchar(255) not null,
            position    int       default 1,
            image_url   text      default null,
            is_active   tinyint   default 1,
            created_by  int          not null,
            created     timestamp default current_timestamp,
            modified_by int       default null,
            modified    timestamp default null
        );
    end if;
end;
call sp_tbl_SkuPictures();
drop procedure if exists sp_tbl_SkuPictures;