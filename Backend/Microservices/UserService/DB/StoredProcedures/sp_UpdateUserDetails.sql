drop procedure if exists sp_UpdateUserDetails;
create procedure sp_UpdateUserDetails(parUserId int, parFirstName varchar(255), parLastName varchar(255),
                                      parEmail varchar(255), parPassword varchar(255), parPhone varchar(15))
begin
    set @isExists = 0;
    set @isAuthChanged = 0;
    set @authSet = '';
    select id into @isExists from tbl_UserMaster where id = parUserId and is_active = 1;
    if @isExists > 0 then
        set @setClaus = '';
        if length(parFirstName) > 0 then
            set @setClaus = concat(@setClaus, ' first_name = ''', parFirstName, ''',');
        end if;
        if length(parLastName) > 0 then
            set @setClaus = concat(@setClaus, ' last_name = ''', parFirstName, ''',');
        end if;
        if length(parEmail) > 0 or length(parPhone) > 0 or length(parPassword) > 0 then
            set @isAuthChanged = 1;
        end if;
        #Checking Auth Change.
        if @isAuthChanged = 1 then
            if length(parEmail) > 0 then
                set @authSet = concat(@authSet, ' email = ''', parEmail, ''',');
                set @setClaus = concat(@authSet, ' email = ''', parEmail, ''',');
            end if;
            if length(parPassword) > 0 then
                set @authSet = concat(@authSet, ' password = ''', parPassword, ''',');
            end if;
            if length(parPhone) > 0 then
                set @authSet = concat(@authSet, ' phone_number = ''', parPhone, ''',');
                set @setClaus = concat(@authSet, ' phone_number = ''', parPhone, ''',');
            end if;
            #Updating the login master table.
            set @authSet = substr(@authSet, 1, length(@authSet) - 1);
            select concat('update tbl_LoginMaster set ', @authSet, ' , modified_by = ', parUserId,
                          ', modified = now() where user_id = ', parUserId, ' and is_active =1')
            into @stmtSQL;
            prepare stmtExec from @stmtSQL;
            execute stmtExec;
            deallocate prepare stmtExec;
        end if;
        if length(@setClaus) > 0 then
            set @setClaus = substr(@setClaus, 1, length(@setClaus) - 1);
            #Updating the user master table.
            select concat('update tbl_UserMaster set ', @setClaus, ' ,modified_by = ', parUserId,
                          ' ,modified=now() where id = ', parUserId, ' and is_active = 1')
            into @stmtSQL;
            #select @stmtSQL;
            prepare stmtExec from @stmtSQL;
            execute stmtExec;
            deallocate prepare stmtExec;
            select 1 as id;
        elseif length(@authSet) > 0 then
            select 1 as id;
        else
            select -1 as id;
        end if;
    else
        select -1 as id;
    end if;
end;