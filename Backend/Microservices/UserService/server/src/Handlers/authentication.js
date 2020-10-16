const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Auth = require("./../Entity/authentication");
const authHandler = {};
/**
 * Method to handle the Auth requests
 * @param dataObject: The request object
 */
authHandler.auth = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_POST) {
         const email = validators.validateEmail(dataObject.postData[constants.EMAIL]) ?
            dataObject.postData[constants.EMAIL] : false;
         const password = validators.validateString(dataObject.postData[constants.PASSWORD]) ?
            dataObject.postData[constants.PASSWORD] : false;
         const phone = validators.validatePhone(dataObject.postData[constants.PHONE_NUMBER]) ?
            dataObject.postData[constants.PHONE_NUMBER] : false;
         const otp = validators.validateNumber(dataObject.postData[constants.OTP]) ?
            dataObject.postData[constants.OTP] : false;
         if ((email && password) || (phone && !otp) || (phone && otp)) {
            const auth = new Auth(phone, email);
            auth.login(password, otp).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};
/**
 * Exporting the module.
 */
module.exports = authHandler;