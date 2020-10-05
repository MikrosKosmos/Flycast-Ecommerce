drop procedure if exists sp_tbl_LoginMaster;
create procedure sp_tbl_LoginMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_LoginMaster'
        ) then
        create table tbl_LoginMaster
        (
            id              int primary key auto_increment,
            user_id         int unique                             references tbl_UserMaster (id) on update cascade on delete set null,
            email           varchar(255) unique                    references tbl_UserMaster (email) on update cascade on delete set null,
            phone_number    varchar(15)                            not null,
            password        varchar(255) default null,
            last_login_time timestamp    default current_timestamp not null,
            is_active       tinyint      default 1                 not null,
            created_by      int                                    not null,
            created         timestamp    default current_timestamp not null,
            modified_by     int          default null,
            modified        timestamp    default null
        );
    end if;
end;
call sp_tbl_LoginMaster();
drop procedure if exists sp_tbl_LoginMaster;