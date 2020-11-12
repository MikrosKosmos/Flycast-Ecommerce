const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const generators = require("validatorswithgenerators").generators;
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
               this._assetUniqueNumber = validators.validateString(this._assetUniqueNumber) ?
                  this._assetUniqueNumber : generators.generateRandomToken(16);
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

   /**
    * Method to get teh Asset Details.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}
    */
   getAsset(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_ASSET, [this._assetId, this._category]).then(_resultSet => {
                  const result = _resultSet[0];
                  if (validators.validateUndefined(result) && result.length > 0) {
                     let assetResult = {};
                     let attributeValues = [];
                     for (let i = 0; i < result.length; i++) {
                        let oneAttributeValue = {};
                        oneAttributeValue[constants.ATTRIBUTE_ID] = result[i][constants.ATTRIBUTE_ID];
                        oneAttributeValue[constants.ATTRIBUTE_NAME] = result[i][constants.ATTRIBUTE_NAME];
                        oneAttributeValue[constants.ATTRIBUTE_DESCRIPTION] = result[i][constants.ATTRIBUTE_DESCRIPTION];
                        oneAttributeValue[constants.ATTRIBUTE_DEFAULT_VALUE] = result[i][constants.ATTRIBUTE_DEFAULT_VALUE];
                        oneAttributeValue[constants.ASSET_ATTRIBUTE_VALUE] = result[i][constants.ASSET_ATTRIBUTE_VALUE];
                        attributeValues.push(oneAttributeValue);
                     }
                     assetResult = result[0];
                     delete assetResult[constants.ATTRIBUTE_ID];
                     delete assetResult[constants.ATTRIBUTE_NAME];
                     delete assetResult[constants.ATTRIBUTE_DEFAULT_VALUE];
                     delete assetResult[constants.ATTRIBUTE_DESCRIPTION];
                     delete assetResult[constants.ASSET_ATTRIBUTE_VALUE];
                     assetResult[constants.ATTRIBUTE_VALUES] = attributeValues;
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, assetResult]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
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

   /**
    * Method to get the products.
    * @returns {Promise<Array>}:
    */
   getProducts() {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_GET_PRODUCTS, []).then(_resultSet => {
            const result = _resultSet[0];
            if (validators.validateUndefined(result)) {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
            } else {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, []]);
            }
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Asset;