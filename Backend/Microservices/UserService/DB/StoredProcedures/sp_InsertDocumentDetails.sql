drop procedure if exists sp_InsertDocumentDetails;
create procedure sp_InsertDocumentDetails(parUserId int, parDocumentType enum ('PAN','AADHAAR','GST'),
                                          parDocumentId varchar(255), parFileUrl varchar(255))
begin
    set @isValid = 0;
    set @isRegistered = 0;
    select id into @isValid from tbl_UserMaster where id = parUserId and is_active = 1;
    select id
    into @isRegistered
    from tbl_UserRoleMapping
    where user_id = parUserId
      and role_id = 3
      and role_status = 2
      and is_active = 1;
    if @isValid > 0 and @isRegistered > 0 then
        set @isExists = 0;
        select id
        into @isExists
        from tbl_DocumentMaster
        where document_type = parDocumentType
          and document_id = parDocumentId;
        if @isExists > 0 then
            select -1 as id;
        else
            insert into tbl_DocumentMaster (user_id, document_type, document_id, file_url, created_by)
                value (parUserId, parDocumentType, parDocumentId, parFileUrl, parUserId);
            update tbl_UserRoleMapping
            set role_status=1,
                modified=now(),
                modified_by = parUserId
            where user_id = parUserId
              and role_id = 3
              and role_status = 1
              and is_active = 1;
            select last_insert_id() as id;
        end if;
    else
        select -1 as id;
    end if;
end;