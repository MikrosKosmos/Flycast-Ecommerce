drop procedure if exists sp_tbl_DocumentMaster;
create procedure sp_tbl_DocumentMaster()
begin
    #Declaring the schema.
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    #Checking if the table already exists or not.
    if not exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_DocumentMaster'
        ) then
        create table tbl_DocumentMaster
        (
            id            int primary key auto_increment,
            user_id       int                                    not null references tbl_UserMaster (id) on update cascade on delete set null,
            document_type enum ('PAN','AADHAAR','GST')           not null,
            document_id   varchar(255)                           not null,
            file_url      varchar(255) default null,
            is_active     tinyint      default 1,
            created_by    int                                    not null,
            created       timestamp    default CURRENT_TIMESTAMP not null,
            modified_by   int          default null,
            modified      timestamp    default null
        );
    end if;
end;
call sp_tbl_DocumentMaster();
drop procedure if exists sp_tbl_DocumentMaster;