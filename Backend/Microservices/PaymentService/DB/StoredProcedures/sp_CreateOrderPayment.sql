drop procedure if exists sp_CreateOrderPayment;
create procedure sp_CreateOrderPayment(parOrderId int, parTransactionId varchar(100),
                                       parBaseAmount float, parCouponCode varchar(100), parUserId int)
begin
    set @isValid = 0;
    select id
    into @isValid
    from tbl_OrderPaymentTransaction
    where transaction_id = parTransactionId
      and is_active = 1;
    if @isValid = 0 then
        set @grossAmount = 0;
        set @discount = 0;
        #Calculating the value.
        call sp_GetGrossAmount(parBaseAmount, parCouponCode,
                               @grossAmount, @discount);
        #Creating the payment with Processing Status.
        insert into tbl_OrderPaymentTransaction (user_id, order_id, transaction_id, base_amount,
                                                 coupon_code, discount_amount, total_payable_amount,
                                                 payment_status_id, created_by)
            value (parUserId, parOrderId, parTransactionId, parBaseAmount,
                   parCouponCode, @discount, @grossAmount, 7, parUserId);
        select last_insert_id() as id, @grossAmount as gross_amount;
    else
        select -1 as id;
    end if;
end;