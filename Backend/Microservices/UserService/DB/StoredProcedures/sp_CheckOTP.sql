drop procedure if exists sp_CheckOTP;
create procedure sp_CheckOTP(parPhone varchar(15), parOTP int, OUT parIsValid int, OUT parExtraData text)
begin
    set @isValid = -1,@extraData = '';
    select id, extra_data
    into @isValid,@extraData
    from tbl_OtpMaster
    where phone_number = parPhone
      and otp = parOTP
      and validity > now()
      and is_active = 1;
    if @isValid > 0 then
        delete from tbl_OtpMaster where id = @isValid;
    end if;
    set parIsValid = @isValid;
    set parExtraData = @extraData;
end;