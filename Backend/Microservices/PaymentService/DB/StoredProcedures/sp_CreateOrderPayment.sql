drop procedure if exists sp_CreateOrderPayment;
create procedure sp_CreateOrderPayment(parOrderId int, parTransactionId varchar(100),
                                       parBaseAmount float, parCouponCode varchar(100), parCategoryId int,
                                       parUserId int)
begin
    set @isValid = 0;
    select id into @isValid from tbl_OrderPaymentTransaction where transaction_id = parTransactionId and is_active = 1;
    if @isValid = 0 then
        set @grossAmount = 0;
        set @taxAmount = 0;
        set @discount = 0;
        #Calculating the value.
        call sp_GetGrossAmount(parBaseAmount, parCouponCode, parCategoryId,
                               @grossAmount, @discount, @taxAmount);
        #Creating the payment with Processing Status.
        insert into tbl_OrderPaymentTransaction (user_id, order_id, category_id, transaction_id, base_amount,
                                                 coupon_code, discount_amount, gst_amount, total_payable_amount,
                                                 payment_status_id, created_by)
            value (parUserId, parOrderId, parCategoryId, parTransactionId, parBaseAmount,
                   parCouponCode, @discount, @taxAmount, @grossAmount, 7, parUserId);
        select last_insert_id() as id, @grossAmount as gross_amount;
    else
        select -1 as id;
    end if;
end;