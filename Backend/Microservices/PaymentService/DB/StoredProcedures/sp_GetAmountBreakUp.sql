drop procedure if exists sp_GetAmountBreakUp;
create procedure sp_GetAmountBreakUp(parCategoryId int, parCouponCode varchar(100), parBaseAmount float)
begin
    set @discountValue = 0;
    set @gross = 0;
    set @tax = 0;
    call sp_GetGrossAmount(parBaseAmount, parCouponCode, parCategoryId,
                           @gross, @discountValue, @tax);
    select parBaseAmount as base_amount, @discountValue as discount_value, @tax as tax, @gross as gross_amount;
end;