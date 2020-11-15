drop procedure if exists sp_tbl_SkuRatingDetails;
create procedure sp_tbl_RatingDetails()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_SkuRatingDetails'
        ) then
        begin
            create table tbl_SkuRatingDetails
            (
                id          int primary key auto_increment,
                user_id     int                   not null,
                sku         varchar(255)          not null,
                rating      float     default 0.0 not null,
                is_active   tinyint   default 1   not null,
                created_by  int                   not null,
                created     timestamp default current_timestamp,
                modified_by int       default null,
                modified    timestamp default null
            );
        end;
    end if;
end;
call sp_tbl_RatingDetails();
drop procedure if exists sp_tbl_SkuRatingDetails;