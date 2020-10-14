const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const printer = require('./../Helpers/printer');
const usersHandler = {};

const Users = require("./../Entity/users");
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
         const otp = validators.validateNumber(dataObject.postData[constants.OTP]) ?
            dataObject.postData[constants.OTP] : false;
         const email = validators.validateEmail(dataObject.postData[constants.EMAIL]) ?
            dataObject.postData[constants.EMAIL] : false;
         const usedReferralCode = validators.validateString(dataObject.postData[constants.USED_REFERRAL_CODE]) ?
            dataObject.postData[constants.USED_REFERRAL_CODE] : false;
         if (firstName && lastName && phone && gender) {
            const users = new Users(false, firstName, lastName, gender, email, phone);
            users.validateBeforeRegister(usedReferralCode).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else if (phone && otp) {
            const users = new Users(false, false, false, false, false, phone);
            users.register(otp).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1);
         }
      } else if (method === constants.HTTP_PUT) {
         const userId = validators.validateNumber(dataObject.postData[constants.ID]) ?
            dataObject.postData[constants.ID] : false;
         const firstName = validators.validateString(dataObject.postData[constants.FIRST_NAME]) ?
            dataObject.postData[constants.FIRST_NAME] : false;
         const lastName = validators.validateString(dataObject.postData[constants.LAST_NAME]) ?
            dataObject.postData[constants.LAST_NAME] : false;
         const phone = validators.validatePhone(dataObject.postData[constants.PHONE_NUMBER]) ?
            dataObject.postData[constants.PHONE_NUMBER] : false;
         const email = validators.validateEmail(dataObject.postData[constants.EMAIL]) ?
            dataObject.postData[constants.EMAIL] : false;
         const password = validators.validateString(dataObject.postData[constants.PASSWORD]) ?
            dataObject.postData[constants.PASSWORD] : false;
         if (userId && (firstName || lastName || phone || email || password)) {
            const users = new Users(userId, firstName, lastName, false, email, phone);
            users.updateDetails(password).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject([responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1)]);
         }
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};

/**
 * Exporting the handler.
 */
module.exports = usersHandler;