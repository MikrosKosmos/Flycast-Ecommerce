drop procedure if exists sp_CreateBankDetails;
create procedure sp_CreateBankDetails(parUserId int, parAccountNumber bigint, parBankName varchar(255),
                                      parBranchName varchar(255), parIfscCode varchar(50),
                                      parAccountHolderName varchar(200))
begin
    set @isExists = 0;
    select id
    into @isExists
    from tbl_BankDetails
    where user_id = parUserId
      and account_no = parAccountNumber
      and is_active = 1;
    if @isExists = 0 then
        insert into tbl_BankDetails (user_id, account_no, bank_name, branch_name, ifsc_code, holder_name, created_by)
            value (parUserId, parAccountNumber, parBankName, parBranchName, parIfscCode, parAccountHolderName,
                   parUserId);
        select last_insert_id() as id;
    else
        select -1 as id;
    end if;
end;