const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const utils = require("./../Helpers/utils");

class Cart {
   /**
    *
    * @param cartId
    * @param sku
    * @param quantity
    */
   constructor(cartId, sku, quantity) {
      this._cartId = validators.validateNumber(cartId) ? cartId : false;
      this._sku = validators.validateString(sku) ? sku : false;
      this._quantity = validators.validateNumber(quantity) ? quantity : false;
   }

   /**
    * Method to create or update the cart details for a user.
    * @param jwToken: The user token.
    * @returns {Promise<Array>}:
    */
   createOrUpdate(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_CUSTOMER_ID)) {
               database.runSp(constants.SP_CREATE_UPDATE_CART, [userData[constants.ID],
                  this._sku, this._quantity]).then(_resultSet => {
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
    * Method to get the cart details for a user.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   getCartDetails(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_CART_DETAILS, [userData[constants.ID]]).then(_resultSet => {
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
 * Exporting the Cart Class.
 */
module.exports = Cart;