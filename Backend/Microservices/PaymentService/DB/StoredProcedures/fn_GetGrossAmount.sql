drop function if exists fn_GetGrossAmount;
create function fn_GetGrossAmount(parBaseAmount float, parCouponCode varchar(50), parCategoryId int) returns float READS SQL DATA
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
    #Getting GST percentage.
    select gst_percentage
    into @taxPercentage
    from tbl_CategoryGSTMapping
    where category_id = parCategoryId
      and is_active = 1;
    #Calculating amount.
    if @isValid > 0 and @currentDate between @startDate and @endDate and @discountValue > 0 then
        set @grossAmount = (((@taxPercentage * parBaseAmount) / 100) + parBaseAmount) - @discountValue;
    else
        set @grossAmount = ((@taxPercentage * parBaseAmount) / 100) + parBaseAmount;
    end if;
    return @grossAmount;
end;