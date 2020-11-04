const constants = require('./constants');
const encrypterDecrypter = require('./encrypterDecrypter');
const NetworkHelper = require('./../Helpers/networkHelper');
const printer = require('./printer');
const tokenValidator = {};
/**
 * Method to validate a user token from the user microservice.
 * @param userToken: The token of the user to be validated.
 * @returns {Promise<Object>}: The user data, if valid, else false.
 */
tokenValidator.validateToken = (userToken) => {
   return new Promise((resolve, reject) => {
      const headers = {}, body = {};
      headers[constants.API_AUTH_KEY] = encrypterDecrypter.decrypt(process.env[constants.MICROSERVICE_AUTH_KEY_VALUE]);
      body[constants.JW_TOKEN] = userToken;
      const networkHelper = new NetworkHelper(constants.USER_SERVICE_HOST, constants.USER_SERVICE_VALIDATE_TOKEN_PATH,
         constants.HTTP_POST, null, body, headers, constants.USER_SERVICE_PORT);
      networkHelper.request().then(response => {
         const isValid = response[constants.RESPONSE_KEY][constants.IS_VALID];
         // noinspection EqualityComparisonWithCoercionJS
         if (isValid && response[constants.RESPONSE_KEY][constants.ID] > 0) {
            resolve(response[constants.RESPONSE_KEY]);
         } else {
            reject(false);
         }
      }).catch(err => {
         printer.printError(err);
         reject(err);
      });
   });
};
/**
 * Exporting the module.
 */
module.exports = tokenValidator;