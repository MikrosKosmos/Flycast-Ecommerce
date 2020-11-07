const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const tokenValidator = require("./../Helpers/tokenValidator");
const utils = require("./../Helpers/utils");

class SKU {
   /**
    *
    * @param brand
    * @param model
    * @param color
    * @param grade
    * @param storage
    * @param parentCategory
    * @param sku
    */
   constructor(brand, model, color, grade, storage, parentCategory, sku) {
      this._brand = validators.validateString(brand) ? brand : false;
      this._model = validators.validateString(model) ? model : false;
      this._color = validators.validateString(color) ? color : false;
      this._grade = validators.validateString(grade) ? grade : false;
      this._storage = validators.validateString(storage) ? storage : false;
      this._parentCategory = validators.validateNumber(parentCategory) ? parentCategory : false;
      this._sku = validators.validateString(sku) ? sku : false;
   }

   /**
    * Method to create the SKU.
    * @param jwToken: The token of the vendor user.
    * @returns {Promise<Array>}:
    */
   createSku(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               database.runSp(constants.SP_CREATE_SKU, [this._brand, this._model, this._color,
                  this._grade, this._storage, this._parentCategory, userData[constants.ID]]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result)) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
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
    * Method to get the SKU.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   getSku(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_SKU, [this._sku, this._brand, this._model]).then(_resultSet => {
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
 * Exporting the SKUs.
 */
module.exports = SKU;