const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const tokenValidator = require("./../Helpers/tokenValidator");

class Attribute {
   /**
    * _attributeId
    * @param attributeId
    */
   constructor(attributeId) {
      this._attributeId = validators.validateNumber(attributeId) ? attributeId : false;
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
    * Method to create attribute.
    * @param attributeLists: The array containing the attribute lists.
    * @param jwToken: the user token.
    * @returns {Promise<Array>}:
    */
   createAttribute(attributeLists, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await this._validateUserToken(jwToken);
            if (validators.validateUndefined(userData)) {
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
}

/**
 * Exporting the class.
 */
module.exports = Attribute;