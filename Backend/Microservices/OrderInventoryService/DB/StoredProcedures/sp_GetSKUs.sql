drop procedure if exists sp_GetSKUs;
create procedure sp_GetSKUs(parSKU varchar(255), parBrand varchar(255), parModel varchar(255))
begin
    set @whereClaus = '';
    if length(parSKU) > 0 then
        set @whereClaus = concat(' and sku =''', parSKU, '''');
    end if;
    if length(parBrand) > 0 then
        set @whereClaus = concat(@whereClaus, ' and brand = ''', parBrand, '''');
    end if;
    if length(parModel) > 0 then
        set @whereClaus = concat(@whereClaus, ' and model = ''', parModel, '''');
    end if;
    select concat('select s.id,
           brand,
           model,
           color,
           product_grade,
           storage,
           s.parent_category,
           cm.category_name,
           sku
    from tbl_SkuMaster s
             left join tbl_CategoryMaster cm
                       on s.parent_category = cm.id where s.is_active = 1 ', @whereClaus)
    into @stmtSQL;
    #select @stmtSQL;
    prepare stmtExec from @stmtSQL;
    execute stmtExec;
    deallocate prepare stmtExec;
end;