drop procedure if exists sp_GetPaymentDetails;
create procedure sp_GetPaymentDetails(parOrderId int, parPaymentId int)
begin
    set @whereClaus = '';
    if parOrderId > 0 then
        set @whereClaus = concat('order_id = ', parOrderId);
    elseif parPaymentId > 0 then
        set @whereClaus = concat('p.id = ', parPaymentId);
    end if;
    select concat('select p.id,
           p.user_id,
           order_id,
           p.category_id,
           c.gst_percentage,
           transaction_id,
           base_amount,
           coupon_code,
           discount_amount,
           gst_amount,
           total_payable_amount,
           payment_status_id,
           sm.status_name
    from tbl_OrderPaymentTransaction p
             left join tbl_StatusMaster sm
                       on p.payment_status_id = sm.id
             left join tbl_CategoryGSTMapping c
                       on c.category_id = p.category_id
    where ', @whereClaus, ' and  p.is_active = 1')
    into @stmtSQL;
    #select @stmtSQL;
    prepare stmtExec from @stmtSQL;
    execute stmtExec;
    deallocate prepare stmtExec;
end;