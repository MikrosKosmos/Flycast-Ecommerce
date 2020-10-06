drop procedure if exists sp_ValidateOrCreateOTP;
create procedure sp_ValidateOrCreateOTP(parPhone varchar(15), parOtp int, parValidity varchar(20), parIsCheck int)
begin
    if parIsCheck = 0 then
        #To create a new OTP.
        set @isExists = 0;
        select id into @isExists from tbl_OtpMaster where phone_number = parPhone and is_active = 1;
        if @isExists = 0 then
            #Creating the new OTP.
            insert into tbl_OtpMaster (phone_number, otp, validity, created_by) value (parPhone, parOtp, parValidity, 1);
            select last_insert_id() as id;
        else
            #Updating the existing OTP for resend.
            update tbl_OtpMaster
            set otp=parOtp,
                validity=parValidity,
                modified_by=1,
                modified=now()
            where phone_number = parPhone
              and is_active = 1;
            select 1 as id;
        end if;
    else
        #To validate the OTP.
        set @isValid = 0;
        select id
        into @isValid
        from tbl_OtpMaster
        where phone_number = parPhone
          and otp = parOtp
          and validity > now()
          and is_active = 1;
        if @isValid > 0 then
            #deleting the otp after checking.
            delete from tbl_OtpMaster where phone_number = parPhone and otp = parOtp;
            select 1 as id;
        else
            select -1 as id;
        end if;
    end if;
end;