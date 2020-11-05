const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const tokenValidator = require("./../Helpers/tokenValidator");

class Category {
   /**
    * _categoryId
    * @param categoryId
    */
   constructor(categoryId) {
      this._categoryId = validators.validateNumber(categoryId) ? categoryId : false;
   }

   /**
    * Method to validate the user token.
    * @param userToken: The token to be validated.
    * @returns {Promise<Object>}: the user data.
    * @private
    */
   _validateUserToken(userToken) {
      return new Promise((resolve, reject) => {
         tokenValidator.validateToken(userToken).then(userData => {
            resolve(userData);
         }).catch(err => {
            reject(err);
         });
      });
   }

   /**
    * Method to create a category.
    * @param categoryList: The list of categories.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   createCategory(categoryList, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await this._validateUserToken(jwToken);
            if (validators.validateUndefined(userData)) {
               database.runSp(constants.SP_CREATE_CATEGORY,
                  [JSON.stringify(categoryList), userData[constants.ID]]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result) && result.id > 0) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result])
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
    * Method to get the categories, either by category id or all at once.
    * @param jwToken: The user token.
    * @returns {Promise<Array>}
    */
   getCategory(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await this._validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_CATEGORIES, [this._categoryId]).then(_resultSet => {
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
 * Exporting the class.
 */
module.exports = Category;