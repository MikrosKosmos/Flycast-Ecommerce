drop procedure if exists sp_tbl_CouponCodeMaster;
create procedure sp_tbl_CouponCodeMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CouponCodeMaster'
        ) then
        CREATE TABLE `tbl_CouponCodeMaster`
        (
            `id`                  int          NOT NULL AUTO_INCREMENT,
            `coupon_code`         varchar(255) NOT NULL,
            `discount_amount`     decimal(18, 2)        DEFAULT NULL,
            `discount_percentage` decimal(18, 2)        DEFAULT NULL,
            `coupon_start_date`   date         NOT NULL,
            `coupon_end_date`     date                  DEFAULT NULL,
            `coupon_description`  varchar(255) NOT NULL,
            `is_active`           tinyint               DEFAULT '1',
            `created_by`          int          NOT NULL,
            `created`             timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `modified_by`         int                   DEFAULT NULL,
            `modified`            timestamp    NULL     DEFAULT NULL,
            PRIMARY KEY (`id`)
        );
    end if;
end;
call sp_tbl_CouponCodeMaster();
drop procedure if exists sp_tbl_CouponCodeMaster;