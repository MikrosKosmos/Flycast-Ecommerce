drop procedure if exists sp_GetAmountBreakUp;
create procedure sp_GetAmountBreakUp(parCouponCode varchar(100), parBaseAmount float)
begin
    set @discountValue = 0;
    set @gross = 0;
    call sp_GetGrossAmount(parBaseAmount, parCouponCode,
                           @gross, @discountValue);
    select parBaseAmount as base_amount, @discountValue as discount_value, @gross as gross_amount;
end;