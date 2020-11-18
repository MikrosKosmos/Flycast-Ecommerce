drop procedure if exists sp_tbl_OrderPaymentTransaction;
create procedure sp_tbl_OrderPaymentTransaction()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_OrderPaymentTransaction'
        ) then
        CREATE TABLE tbl_OrderPaymentTransaction
        (
            `id`                   int primary key NOT NULL AUTO_INCREMENT,
            `user_id`              int             NOT NULL,
            `order_id`             int             NOT NULL,
            `category_id`          int             NOT NULL,
            `transaction_id`       varchar(255)    NOT NULL,
            `base_amount`          float           NOT NULL,
            `coupon_code`          varchar(20)              DEFAULT NULL,
            `discount_amount`      float                    DEFAULT 0.0,
            `gst_amount`           float           NOT NULL,
            `total_payable_amount` float           NOT NULL,
            `payment_status_id`    int             NOT NULL,
            `is_active`            tinyint         NOT NULL DEFAULT '1',
            `created_by`           int             NOT NULL,
            `created`              timestamp       not NULL DEFAULT CURRENT_TIMESTAMP,
            `modified_by`          int                      DEFAULT NULL,
            `modified`             timestamp       NULL     DEFAULT NULL
        );
    end if;
end;
call sp_tbl_OrderPaymentTransaction();
drop procedure if exists sp_tbl_OrderPaymentTransaction;