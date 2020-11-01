drop procedure if exists sp_AssignProductToOrder;
create procedure sp_AssignProductToOrder(parOrderId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_OrderMaster where id = parOrderId and is_active = 1;
    if @isValid > 0 then

    else
        select -1 as id;
    end if;
end;