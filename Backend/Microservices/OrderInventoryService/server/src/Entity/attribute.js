const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const tokenValidator = require("./../Helpers/tokenValidator");
const utils = require("./../Helpers/utils");

class Attribute {
   /**
    * _attributeId
    * @param attributeId
    */
   constructor(attributeId) {
      this._attributeId = validators.validateNumber(attributeId) ? attributeId : false;
   }

   /**
    * Method to create attribute.
    * @param attributeLists: The array containing the attribute lists.
    * @param jwToken: the user token.
    * @returns {Promise<Array>}:
    */
   createAttribute(attributeLists, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               const userId = userData[constants.ID];
               database.runSp(constants.SP_CREATE_ATTRIBUTE,
                  [JSON.stringify(attributeLists), userId]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (result.id > 0) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
               }).catch(err => {
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
    * Method to get the Attributes List for a category.
    * @param categoryId: the category id.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   getAttributesByCategoryId(categoryId, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_CATEGORY_ATTRIBUTES, [categoryId]).then(_resultSet => {
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

   /**
    * Method to get the possible values of an attribute.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   getPossibleValues(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_ATTRIBUTE_POSSIBLE_VALUES, [this._attributeId]).then(_resultSet => {
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
         } catch (err) {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to create the possible values of the attributes.
    * @param valueList: The list of the values.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   createPossibleValues(valueList, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) &&
               userData[constants.ID] > 0 && utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               database.runSp(constants.SP_CREATE_ATTRIBUTE_POSSIBLE_VALUES, [this._attributeId,
                  JSON.stringify(valueList), userData[constants.ID]]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result) && result[constants.ID] > 0) {
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
    * Method to search for attribute values by SKU.
    * @param sku: The sku for which the attributes are required.
    * @returns {Promise<Array>}:
    */
   getAttributeBySku(sku) {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_GET_ATTRIBUTE_VALUE_BY_SKU, [sku]).then(_resultSet => {
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
module.exports = Attribute;