drop procedure if exists sp_tbl_StatusMaster;
create procedure sp_tbl_StatusMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_StatusMaster'
        ) then
        CREATE TABLE `tbl_StatusMaster`
        (
            `id`          int          NOT NULL AUTO_INCREMENT,
            `status_name` varchar(255) NOT NULL,
            `is_active`   tinyint               DEFAULT '1',
            `created_by`  int          NOT NULL,
            `created`     timestamp    NOT NULL DEFAULT CURRENT_TIMESTAMP,
            `modified_by` int                   DEFAULT NULL,
            `modified`    timestamp    NULL     DEFAULT NULL,
            PRIMARY KEY (`id`)
        );
    end if;
end;
call sp_tbl_StatusMaster();
drop procedure if exists sp_tbl_StatusMaster;