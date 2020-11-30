drop procedure if exists sp_UpdatePaymentStatus;
create procedure sp_UpdatePaymentStatus(parPaymentId int, parStatusId int, parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_OrderPaymentTransaction where id = parPaymentId and is_active = 1;
    if @isValid > 0 then
        update tbl_OrderPaymentTransaction
        set payment_status_id =parStatusId,
            modified_by=parUserId,
            modified=now()
        where id = parPaymentId
          and is_active = 1;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;