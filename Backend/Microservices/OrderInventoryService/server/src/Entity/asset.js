const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const utils = require("./../Helpers/utils");

class Asset {
   /**
    *
    * @param assetId
    * @param assetUniqueNumber
    * @param category
    * @param subCategory
    * @param sku
    * @param manufacturer
    * @param assetName
    */
   constructor(assetId, assetUniqueNumber, category, subCategory, sku, manufacturer, assetName) {
      this._assetId = validators.validateNumber(assetId) ? assetId : false;
      this._assetUniqueNumber = validators.validateNumber(assetUniqueNumber) ? assetUniqueNumber : false;
      this._category = validators.validateNumber(category) ? category : false;
      this._subCategory = validators.validateNumber(subCategory) ? subCategory : false;
      this._sku = validators.validateString(sku) ? sku : false;
      this._manufacturer = validators.validateString(manufacturer) ? manufacturer : false;
      this._assetName = validators.validateString(assetName) ? assetName : false;
   }

   /**
    * Method to create the asset.
    * @param productGrade: The grade of the product.
    * @param location: The location of the asset.
    * @param procurementPrice: The procurement price of the asset.
    * @param basePrice: The base price.
    * @param sellingPrice: The selling price.
    * @param attributesList: The list of attributes for the product.
    * @param jwToken: The user token, has to be a vendor.
    * @returns {Promise<Array>}: The response code and the response.
    */
   createAsset(productGrade, location, procurementPrice, basePrice, sellingPrice, attributesList, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               database.runSp(constants.SP_CREATE_ASSET, [this._assetName, this._assetUniqueNumber,
                  this._category, this._subCategory, this._sku, this._manufacturer,
                  validators.validateString(productGrade) ? productGrade : false,
                  validators.validateString(location) ? location : false, userData[constants.ID],
                  procurementPrice, validators.validateNumber(basePrice) ? basePrice : false,
                  sellingPrice, JSON.stringify(attributesList)]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Asset;