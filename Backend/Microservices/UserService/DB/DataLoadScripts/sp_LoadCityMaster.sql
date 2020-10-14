drop procedure if exists sp_LoadCityMaster;
create procedure sp_LoadCityMaster()
begin
    declare currentSchema varchar(100) default '';
    select database() into currentSchema;
    if exists(
            select 1
            from information_schema.TABLES
            where TABLE_SCHEMA = currentSchema
              and TABLE_NAME = 'tbl_CityMaster'
        ) then
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Adilabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Anantapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Chittoor', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Cuddapah', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'East Godavari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Guntur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Hyderabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Karimnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Khammam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Krishna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Kurnool', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Mahabubnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Medak', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Nalgonda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Nellore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Nizamabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Prakasam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Rangareddy', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Srikakulam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Visakhapatnam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Vizianagaram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'Warangal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 1, 'West Godavari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Anjaw', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Changlang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Dibang Valley', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'East Kameng', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'East Siang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Itanagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Kurung Kumey', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Lohit', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Lower Dibang Valley', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Lower Subansiri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Papum Pare', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Tawang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Tirap', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Upper Siang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'Upper Subansiri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'West Kameng', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 2, 'West Siang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Barpeta', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Bongaigaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Cachar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Darrang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Dhemaji', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Dhubri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Dibrugarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Goalpara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Golaghat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Guwahati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Hailakandi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Jorhat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Kamrup', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Karbi Anglong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Karimganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Kokrajhar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Lakhimpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Marigaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Nagaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Nalbari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'North Cachar Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Silchar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Sivasagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Sonitpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Tinsukia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 3, 'Udalguri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Araria', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Aurangabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Banka', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Begusarai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Bhagalpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Bhojpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Buxar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Darbhanga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'East Champaran', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Gaya', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Gopalganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Jamshedpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Jamui', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Jehanabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Kaimur (Bhabua)', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Katihar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Khagaria', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Kishanganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Lakhisarai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Madhepura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Madhubani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Munger', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Muzaffarpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Nalanda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Nawada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Patna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Purnia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Rohtas', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Saharsa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Samastipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Saran', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Sheikhpura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Sheohar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Sitamarhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Siwan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Supaul', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'Vaishali', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 4, 'West Champaran', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Bastar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Bhilai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Bijapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Bilaspur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Dhamtari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Durg', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Janjgir-Champa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Jashpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Kabirdham-Kawardha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Korba', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Korea', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Mahasamund', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Narayanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Norh Bastar-Kanker', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Raigarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Raipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Rajnandgaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'South Bastar-Dantewada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 5, 'Surguja', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Canacona', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Candolim', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Chinchinim', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Cortalim', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Goa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Jua', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Madgaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Mahem', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Mapuca', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Marmagao', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Panji', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Ponda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Sanvordem', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 6, 'Terekhol', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Ahmedabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Amreli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Anand', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Banaskantha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Baroda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Bharuch', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Bhavnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Dahod', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Dang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Dwarka', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Gandhinagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Jamnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Junagadh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Kheda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Kutch', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Mehsana', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Nadiad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Narmada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Navsari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Panchmahals', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Patan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Porbandar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Rajkot', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Sabarkantha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Surat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Surendranagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Vadodara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Valsad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 7, 'Vapi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Ambala', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Bhiwani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Faridabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Fatehabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Gurgaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Hisar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Jhajjar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Jind', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Kaithal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Karnal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Kurukshetra', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Mahendragarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Mewat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Panchkula', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Panipat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Rewari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Rohtak', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Sirsa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Sonipat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 8, 'Yamunanagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Bilaspur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Chamba', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Dalhousie', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Hamirpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Kangra', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Kinnaur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Kullu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Lahaul & Spiti', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Mandi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Shimla', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Sirmaur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Solan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 9, 'Una', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Anantnag', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Baramulla', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Budgam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Doda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Jammu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Kargil', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Kathua', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Kupwara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Leh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Poonch', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Pulwama', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Rajauri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Srinagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 10, 'Udhampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Bokaro', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Chatra', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Deoghar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Dhanbad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Dumka', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'East Singhbhum', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Garhwa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Giridih', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Godda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Gumla', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Hazaribag', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Jamtara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Koderma', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Latehar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Lohardaga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Pakur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Palamu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Ranchi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Sahibganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Seraikela', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'Simdega', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 11, 'West Singhbhum', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bagalkot', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bangalore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bangalore Rural', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Belgaum', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bellary', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bhatkal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bidar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Bijapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Chamrajnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Chickmagalur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Chikballapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Chitradurga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Dakshina Kannada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Davanagere', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Dharwad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Gadag', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Gulbarga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Hampi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Hassan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Haveri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Hospet', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Karwar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Kodagu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Kolar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Koppal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Madikeri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Mandya', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Mangalore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Manipal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Mysore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Raichur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Shimoga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Sirsi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Sringeri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Srirangapatna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Tumkur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Udupi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 12, 'Uttara Kannada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Alappuzha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Alleppey', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Alwaye', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Ernakulam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Idukki', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kannur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kasargod', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kochi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kollam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kottayam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kovalam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Kozhikode', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Malappuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Palakkad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Pathanamthitta', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Perumbavoor', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Thiruvananthapuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Thrissur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Trichur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Trivandrum', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 13, 'Wayanad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Anuppur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Ashoknagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Balaghat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Barwani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Betul', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Bhind', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Bhopal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Burhanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Chhatarpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Chhindwara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Damoh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Datia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Dewas', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Dhar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Dindori', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Guna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Gwalior', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Harda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Hoshangabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Indore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Jabalpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Jagdalpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Jhabua', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Katni', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Khandwa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Khargone', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Mandla', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Mandsaur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Morena', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Narsinghpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Neemuch', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Panna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Raisen', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Rajgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Ratlam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Rewa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Sagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Satna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Sehore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Seoni', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Shahdol', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Shajapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Sheopur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Shivpuri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Sidhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Tikamgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Ujjain', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Umaria', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 14, 'Vidisha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Ahmednagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Akola', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Amravati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Aurangabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Beed', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Bhandara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Buldhana', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Chandrapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Dhule', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Gadchiroli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Gondia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Hingoli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Jalgaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Jalna', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Kolhapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Latur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Mahabaleshwar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Mumbai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Mumbai City', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Mumbai Suburban', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Nagpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Nanded', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Nandurbar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Nashik', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Osmanabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Parbhani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Pune', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Raigad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Ratnagiri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Sangli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Satara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Sholapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Sindhudurg', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Thane', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Wardha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Washim', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 15, 'Yavatmal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Bishnupur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Chandel', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Churachandpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Imphal East', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Imphal West', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Senapati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Tamenglong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Thoubal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 16, 'Ukhrul', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'East Garo Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'East Khasi Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'Jaintia Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'Ri Bhoi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'Shillong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'South Garo Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'West Garo Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 17, 'West Khasi Hills', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Aizawl', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Champhai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Kolasib', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Lawngtlai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Lunglei', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Mamit', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Saiha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Serchhip', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Aizawl', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Champhai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Kolasib', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Lawngtlai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Lunglei', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Mamit', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Saiha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 18, 'Serchhip', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Dimapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Kohima', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Mokokchung', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Mon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Phek', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Tuensang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Wokha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 19, 'Zunheboto', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Angul', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Balangir', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Balasore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Baleswar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Bargarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Berhampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Bhadrak', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Bhubaneswar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Boudh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Cuttack', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Deogarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Dhenkanal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Gajapati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Ganjam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Jagatsinghapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Jajpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Jharsuguda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Kalahandi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Kandhamal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Kendrapara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Kendujhar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Khordha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Koraput', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Malkangiri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Mayurbhanj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Nabarangapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Nayagarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Nuapada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Puri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Rayagada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Rourkela', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Sambalpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Subarnapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 20, 'Sundergarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Amritsar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Barnala', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Bathinda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Faridkot', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Fatehgarh Sahib', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Ferozepur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Gurdaspur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Hoshiarpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Jalandhar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Kapurthala', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Ludhiana', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Mansa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Moga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Muktsar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Nawanshahr', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Pathankot', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Patiala', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Rupnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Sangrur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'SAS Nagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 21, 'Tarn Taran', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Ajmer', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Alwar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Banswara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Baran', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Barmer', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Bharatpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Bhilwara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Bikaner', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Bundi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Chittorgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Churu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Dausa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Dholpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Dungarpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Hanumangarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jaipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jaisalmer', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jalore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jhalawar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jhunjhunu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Jodhpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Karauli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Kota', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Nagaur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Pali', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Pilani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Rajsamand', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Sawai Madhopur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Sikar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Sirohi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Sri Ganganagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Tonk', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 22, 'Udaipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Barmiak', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Be', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Bhurtuk', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Chhubakha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Chidam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Chubha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Chumikteng', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Dentam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Dikchu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Dzongri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Gangtok', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Gauzing', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Gyalshing', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Hema', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Kerung', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Lachen', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Lachung', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Lema', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Lingtam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Lungthu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Mangan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Namchi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Namthang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Nanga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Nantang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Naya Bazar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Padamachen', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Pakhyong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Pemayangtse', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Phensang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Rangli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Rinchingpong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Sakyong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Samdong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Singtam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Siniolchu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Sombari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Soreng', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Sosing', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Tekhug', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Temi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Tsetang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Tsomgo', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Tumlong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Yangang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 23, 'Yumtang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Chennai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Chidambaram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Chingleput', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Coimbatore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Courtallam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Cuddalore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Dharmapuri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Dindigul', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Erode', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Hosur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Kanchipuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Kanyakumari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Karaikudi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Karur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Kodaikanal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Kovilpatti', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Krishnagiri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Kumbakonam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Madurai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Mayiladuthurai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Nagapattinam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Nagarcoil', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Namakkal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Neyveli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Nilgiris', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Ooty', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Palani', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Perambalur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Pollachi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Pudukkottai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Rajapalayam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Ramanathapuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Salem', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Sivaganga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Sivakasi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Thanjavur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Theni', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Thoothukudi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tiruchirappalli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tirunelveli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tirupur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tiruvallur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tiruvannamalai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tiruvarur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Trichy', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Tuticorin', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Vellore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Villupuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Virudhunagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 24, 'Yercaud', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Agartala', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Ambasa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Bampurbari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Belonia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Dhalai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Dharam Nagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Kailashahar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Kamal Krishnabari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Khopaiyapara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Khowai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Phuldungsei', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Radha Kishore Pur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 26, 'Tripura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Alipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Andaman Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Anderson Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Arainj-Laka-Punga', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Austinabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Bamboo Flat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Barren Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Beadonabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Betapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Bindraban', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Bonington', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Brookesabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Cadell Point', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Calicut', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Chetamale', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Cinque Islands', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Defence Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Digilpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Dolyganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Flat Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Geinyale', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Great Coco Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Haddo', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Havelock Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Henry Lawrence Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Herbertabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Hobdaypur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Ilichar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Ingoie', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Inteview Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Jangli Ghat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Jhon Lawrence Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Karen', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Kartara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'KYD Islannd', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Landfall Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Little Andmand', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Little Coco Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Long Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Maimyo', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Malappuram', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Manglutan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Manpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Mitha Khari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Neill Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Nicobar Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'North Brother Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'North Passage Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'North Sentinel Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Nothen Reef Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Outram Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Pahlagaon', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Palalankwe', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Passage Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Phaiapong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Phoenix Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Port Blair', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Preparis Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Protheroepur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Rangachang', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Rongat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Rutland Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Sabari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Saddle Peak', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Shadipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Smith Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Sound Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'South Sentinel Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Spike Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Tarmugli Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Taylerabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Titaije', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Toibalawe', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Tusonabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'West Island', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Wimberleyganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 30, 'Yadita', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 31, 'Chandigarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 31, 'Mani Marja', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Amal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Amli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Bedpa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Chikhli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Dadra & Nagar Haveli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Dahikhed', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Dolara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Galonda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Kanadi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Karchond', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Khadoli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Kharadpada', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Kherabari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Kherdi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Kothar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Luari', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Mashat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Rakholi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Rudana', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Saili', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Sili', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Silvassa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Sindavni', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Udva', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Umbarkoi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Vansda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Vasona', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 32, 'Velugam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Brancavare', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Dagasi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Daman', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Diu', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Magarvara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Nagwa', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Pariali', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 33, 'Passo Covo', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'Central Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'East Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'New Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'North Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'North East Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'North West Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'Old Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'South Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'South West Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 34, 'West Delhi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Hyderabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Karimnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Khammam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Mahbubnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Nizamabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 25, 'Sangareddi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Agra', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Aligarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Amroha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ayodhya', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Azamgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bahraich', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ballia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Banda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bara Banki', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bareilly', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Basti', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bijnor', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bithur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Budaun', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bulandshahr', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Deoria', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Etah', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Etawah', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Faizabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Farrukhabad-cum-Fatehgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Fatehpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Fatehpur Sikri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ghaziabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ghazipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Gonda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Gorakhpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hamirpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hardoi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hathras', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jalaun', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jaunpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jhansi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Kannauj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Kanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lakhimpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lalitpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lucknow', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mainpuri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mathura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Meerut', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mirzapur-Vindhyachal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Moradabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Muzaffarnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Partapgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Pilibhit', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Prayagraj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Rae Bareli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Rampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Saharanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sambhal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Shahjahanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sitapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sultanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Tehri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Varanasi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Agra', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Aligarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Amroha', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ayodhya', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Azamgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bahraich', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ballia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Banda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bara Banki', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bareilly', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Basti', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bijnor', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bithur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Budaun', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Bulandshahr', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Deoria', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Etah', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Etawah', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Faizabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Farrukhabad-cum-Fatehgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Fatehpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Fatehpur Sikri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ghaziabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Ghazipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Gonda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Gorakhpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hamirpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hardoi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Hathras', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jalaun', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jaunpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Jhansi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Kannauj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Kanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lakhimpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lalitpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Lucknow', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mainpuri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mathura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Meerut', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Mirzapur-Vindhyachal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Moradabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Muzaffarnagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Partapgarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Pilibhit', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Prayagraj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Rae Bareli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Rampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Saharanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sambhal', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Shahjahanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sitapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Sultanpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Tehri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 27, 'Varanasi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Almora', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Dehra Dun', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Haridwar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Mussoorie', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Nainital', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 28, 'Pithoragarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Alipore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Alipur Duar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Asansol', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Baharampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Bally', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Balurghat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Bankura', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Baranagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Barasat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Barrackpore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Basirhat', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Bhatpara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Bishnupur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Budge Budge', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Burdwan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Chandernagore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Darjiling', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Diamond Harbour', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Dum Dum', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Durgapur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Bhalisahar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Haora', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Hugli', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Ingraj Bazar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Jalpaiguri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Kalimpong', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Kamarhati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Kanchrapara', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Kharagpur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Koch Bihar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Kolkata', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Krishnanagar', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Malda', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Midnapore', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Murshidabad', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Navadwip', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Palashi', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Panihati', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Purulia', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Raiganj', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Santipur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Shantiniketan', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Shrirampur', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Siliguri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Siuri', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Tamluk', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 29, 'Titagarh', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 37, 'Ariankuppam', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 37, 'Kurumbapet', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 37, 'Manavely', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 37, 'Ozhukarai', null, 1);
        INSERT INTO tbl_CityMaster (country_id, state_id, city_name, city_org_id, created_by)
        VALUES (1, 37, 'Villianur', null, 1);
        select 1 as id;
    else
        select -1 as id;
    end if;
end;
call sp_LoadCityMaster();
drop procedure if exists sp_LoadCityMaster;