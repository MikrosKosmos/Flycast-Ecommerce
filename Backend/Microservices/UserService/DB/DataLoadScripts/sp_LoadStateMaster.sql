drop procedure if exists sp_LoadStateMaster;
create procedure sp_LoadStateMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if exists(select 1
              from information_schema.TABLES
              where TABLE_SCHEMA = currentSchema
                and TABLE_NAME = 'tbl_StateMaster') then
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Andra Pradesh', 'AP', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Arunachal Pradesh', 'AR', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Assam', 'AS', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Bihar', 'BR', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Chhattisgarh', 'CG', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Goa', 'GA', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Gujrat', 'GJ', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Haryana', 'HR', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Himachal Pradesh', 'HP', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Jammu Kashmir', 'JK', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Jharkhand', 'JH', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Karnataka', 'KA', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Kerala', 'KL', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Madhya Pradesh', 'MP', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Maharashtra', 'MH', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Manipur', 'MN', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Meghalaya', 'ML', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Mizoram', 'MZ', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Nagaland', 'NL', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Odisha', 'OD', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Panjab', 'PB', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Rajasthan', 'RJ', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Sikkim', 'SK', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Tamilnadu', 'TN', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Telengana', 'TS', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Tripura', 'TR', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Uttar Pradesh', 'UP', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Uttarakhand', 'UK', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('West Bengal ', 'WB', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Andaman & Nicobar Island', 'AN', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Chandigarh', 'CH', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Dadra & Nagar Haveli', 'DN', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Daman & Diu', 'DD', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Delhi', 'DL', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Ladakh', 'TBA', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Lakshadweep', 'LD', 1, 1);
        INSERT INTO tbl_StateMaster (state_name, state_code, country_id, created_by)
        VALUES ('Puduchery', 'PY', 1, 1);
        select 1 as id;
    else
        select -1 as id;
    end if;
end;
call sp_LoadStateMaster();
drop procedure if exists sp_LoadStateMaster;