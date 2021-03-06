drop procedure if exists sp_GetGrossAmount;
create procedure sp_GetGrossAmount(parBaseAmount float, parCouponCode varchar(50), OUT parGrossAmount float,
                                   OUT parDiscountAmount float)
begin
    set @isValid = 0;
    set @startDate = '',@endDate = '';
    set @currentDate = (select current_date);
    set @discountValue = 0;
    #getting coupon details.
    select id, coupon_start_date, coupon_end_date, discount_amount
    into @isValid ,@startDate,@endDate,@discountValue
    from tbl_CouponCodeMaster
    where coupon_code = parCouponCode
      and is_active = 1;
    set @grossAmount = 0;
    set @taxPercentage = 0;
    #Calculating amount.
    if @isValid > 0 and @currentDate between @startDate and @endDate and @discountValue > 0 then
        set @grossAmount = (parBaseAmount - @discountValue);
    else
        set @grossAmount = (parBaseAmount);
    end if;
    set parGrossAmount = @grossAmount;
    set parDiscountAmount = @discountValue;
end;