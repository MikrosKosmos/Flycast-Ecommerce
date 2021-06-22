drop procedure if exists sp_ValidatePhoneNumber;
create procedure sp_ValidatePhoneNumber(parPhoneNumber varchar(15))
begin
    set @isExists = 0;
    select id
    into @isExists
    from tbl_UserMaster
    where phone_number = parPhoneNumber
      and is_active = 1;
    if @isExists > 0 then
        select 1 as id;
    else
        select -1 as id;
    end if;
end;