drop procedure if exists sp_UpdateOrderStatus;
create procedure sp_UpdateOrderStatus(parOrderId int, parStatus int, parUserId int)
begin
    set @isValid = 0;
    set @isValidStatus = 0;
    select id into @isValid from tbl_OrderMaster where id = parOrderId and is_active = 1;
    select id into @isValidStatus from tbl_StatusMaster where id = parStatus and is_active = 1;
    if @isValid > 0 and @isValidStatus > 0 then
        update tbl_OrderMaster
        set modified_by=parUserId,
            modified=now(),
            order_status = parStatus
        where id = parOrderId
          and is_active = 1;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;