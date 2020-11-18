drop procedure if exists sp_tbl_BankDetails;
create procedure sp_tbl_BankDetails()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_BankDetails'
        ) then
        CREATE TABLE `tbl_BankDetails`
        (
            `id`          int primary key NOT NULL AUTO_INCREMENT,
            `user_id`     int             NOT NULL,
            `account_no`  bigint          NOT NULL,
            `bank_name`   varchar(200)    NOT NULL,
            `branch_name` varchar(200)    NOT NULL,
            `ifsc_code`   varchar(50)     NOT NULL,
            `holder_name` varchar(200)    NOT NULL,
            `is_active`   tinyint         NOT NULL DEFAULT '1',
            `created_by`  int             NOT NULL,
            `created`     timestamp       NULL     DEFAULT CURRENT_TIMESTAMP,
            `modified_by` int                      DEFAULT NULL,
            `modified`    timestamp       NULL     DEFAULT NULL,
            UNIQUE KEY `account_no` (`account_no`),
            KEY `IDX_BankDetails_UserIdAccountNo` (`user_id`, `account_no`)
        );
    end if;
end;
call sp_tbl_BankDetails();
drop procedure if exists sp_tbl_BankDetails;