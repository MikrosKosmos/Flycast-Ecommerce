const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const printer = require('./../Helpers/printer');
const usersHandler = {};
/**
 * Method to handle the users requests
 * @param dataObject: the request object.
 * @returns {Promise<Array>}
 */
usersHandler.users = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         //TODO:
      } else if (method === constants.HTTP_POST) {
         const firstName = validators.validateString(dataObject.postData[constants.FIRST_NAME]) ?
            dataObject.postData[constants.FIRST_NAME] : false;
         const lastName = validators.validateString(dataObject.postData[constants.LAST_NAME]) ?
            dataObject.postData[constants.LAST_NAME] : false;
         const phone = validators.validatePhone(dataObject.postData[constants.PHONE_NUMBER]) ?
            dataObject.postData[constants.PHONE_NUMBER] : false;
         const gender = validators.validateCharacter(dataObject.postData[constants.GENDER]) ?
            dataObject.postData[constants.GENDER] : false;
      } else if (method === constants.HTTP_PUT) {
         //TODO:
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};

/**
 * Exporting the handler.
 */
module.exports = usersHandler;