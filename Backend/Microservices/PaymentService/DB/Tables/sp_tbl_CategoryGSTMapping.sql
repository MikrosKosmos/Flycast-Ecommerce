drop procedure if exists sp_tbl_CategoryGSTMapping;
create procedure sp_tbl_CategoryGSTMapping()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CategoryGSTMapping'
        ) then
        CREATE TABLE `tbl_CategoryGSTMapping`
        (
            `id`             int            NOT NULL AUTO_INCREMENT,
            `category_id`    int            NOT NULL,
            `gst_percentage` decimal(18, 2) NOT NULL,
            `is_active`      tinyint                 DEFAULT '1',
            `created_by`     int            NOT NULL,
            `created`        timestamp      NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `modified_by`    int                     DEFAULT NULL,
            `modified`       timestamp      NULL     DEFAULT NULL,
            PRIMARY KEY (`id`)
        );
    end if;
end;
call sp_tbl_CategoryGSTMapping();
drop procedure if exists sp_tbl_CategoryGSTMapping;