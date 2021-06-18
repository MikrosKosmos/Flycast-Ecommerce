drop procedure if exists sp_Deploy;
create procedure sp_Deploy()
begin
    truncate tbl_SkuMaster;
    truncate tbl_SkuPictures;
    truncate tbl_SkuRatingDetails;
    truncate tbl_AssetMaster;
    truncate tbl_AssetAttributeValue;
    truncate tbl_InventoryMaster;
    truncate tbl_OrderMaster;
    truncate tbl_OrderAssetDetails;
    truncate tbl_OrderProductDetails;
    truncate tbl_ApiLogger;
    truncate tbl_CartMaster;
    truncate tbl_CartDetails;
    select 1 as id;
end;