drop procedure if exists sp_CreateUpdateCart;
create procedure sp_CreateUpdateCart(parUserId int, parSku varchar(255), parQuantity int)
begin
    set @cartId = 0;
    select id into @cartId from tbl_CartMaster where user_id = parUserId and is_active = 1;
    if @cartId = 0 then
        #Creating a cart if it already doesn't exists.
        insert into tbl_CartMaster (user_id, total_products, created_by)
            value (parUserId, 0, parUserId);
        select last_insert_id() into @cartId;
    end if;
    set @isValidSku = 0;
    select id into @isValidSku from tbl_SkuMaster where sku = parSku and is_active = 1;
    if @isValidSku > 0 then
        set @isProductExists = 0;
        #Checking if the SKU is already in the cart or not.
        select id into @isProductExists from tbl_CartDetails where cart_id = @cartId and sku = parSku and is_active = 1;
        if @isProductExists = 0 and parQuantity > 0 then
            #Creating the product if its not already in the cart.
            insert into tbl_CartDetails (cart_id, sku, quantity, created_by)
                value (@cartId, parSku, parQuantity, parUserId);
        elseif @isProductExists > 0 and parQuantity > 0 then
            #updating the cart value for an existing product.
            update tbl_CartDetails
            set quantity=parQuantity,
                modified_by=parUserId,
                modified=now()
            where cart_id = @cartId
              and sku = parSku
              and is_active = 1;
        elseif @isProductExists > 0 and parQuantity = 0 then
            #Removing the item from the cart.
            delete from tbl_CartDetails where cart_id = @cartId and sku = parSku and is_active = 1;
        end if;
        update tbl_CartMaster
        set total_products = (select ifnull(sum(quantity), 0)
                              from tbl_CartDetails
                              where cart_id = @cartId
                                and tbl_CartDetails.is_active = 1),
            modified_by=parUserId,
            modified=now()
        where user_id = parUserId
          and is_active = 1;
        select 1 as id;
    else
        select -1 as id;
    end if;
end;