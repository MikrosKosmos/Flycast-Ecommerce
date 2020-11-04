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
         const email = validators.validateEmail(dataObject.queryString[constants.EMAIL]) ?
            dataObject.queryString[constants.EMAIL] : false;
         const id = validators.validateNumber(dataObject.queryString[constants.USER_ID]) ?
            dataObject.queryString[constants.USER_ID] : false;
         const phone = validators.validatePhone(dataObject.queryString[constants.PHONE_NUMBER]) ?
            dataObject.queryString[constants.PHONE_NUMBER] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if ((email || id || phone) && jwToken) {
            const users = new Users(id, false, false, false, email, phone, jwToken);
            users.getUserDetails().then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
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
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (userId && jwToken && (firstName || lastName || phone || email || password)) {
            const users = new Users(userId, firstName, lastName, false, email, phone, jwToken);
            users.updateDetails(password).then(response => {
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
 * Method to handle the user address requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}: The response code and the response message.
 */
usersHandler.address = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const userId = validators.validateNumber(dataObject.queryString[constants.USER_ID]) ?
            dataObject.queryString[constants.USER_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (userId && jwToken) {
            const users = new Users(userId, false, false, false, false, false, jwToken);
            users.getUserAddress().then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_PUT) {
         const userId = validators.validateNumber(dataObject.postData[constants.USER_ID]) ?
            dataObject.postData[constants.USER_ID] : false;
         const addressId = validators.validateNumber(dataObject.postData[constants.ADDRESS_ID]) ?
            dataObject.postData[constants.ADDRESS_ID] : false;
         const address1 = validators.validateString(dataObject.postData[constants.ADDRESS_1]) ?
            dataObject.postData[constants.ADDRESS_1] : false;
         const address2 = validators.validateString(dataObject.postData[constants.ADDRESS_2]) ?
            dataObject.postData[constants.ADDRESS_2] : false;
         const cityId = validators.validateNumber(dataObject.postData[constants.CITY_ID]) ?
            dataObject.postData[constants.CITY_ID] : false;
         const pincode = validators.validateNumber(dataObject.postData[constants.PINCODE]) ?
            dataObject.postData[constants.PINCODE] : false;
         const addressType = validators.validateString(dataObject.postData[constants.ADDRESS_TYPE]) ?
            dataObject.postData[constants.ADDRESS_TYPE] : false;
         const contactPersonName = validators.validateString(dataObject.postData[constants.CONTACT_PERSON_NAME]) ?
            dataObject.postData[constants.CONTACT_PERSON_NAME] : false;
         const contactPersonNumber = validators.validatePhone(dataObject.postData[constants.CONTACT_PHONE_NUMBER]) ?
            dataObject.postData[constants.CONTACT_PHONE_NUMBER] : false;
         const gpsLat = validators.validateNumber(dataObject.postData[constants.GPS_LAT]) ?
            dataObject.postData[constants.GPS_LAT] : false;
         const gpsLong = validators.validateNumber(dataObject.postData[constants.GPS_LONG]) ?
            dataObject.postData[constants.GPS_LONG] : false;
         const deliveryInstructions = validators.validateString(dataObject.postData[constants.DELIVERY_INSTRUCTION]) ?
            dataObject.postData[constants.DELIVERY_INSTRUCTION] : false;
         const isDefault = validators.validateNumber(dataObject.postData[constants.IS_DEFAULT]) ?
            dataObject.postData[constants.IS_DEFAULT] : 0;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (!userId || !jwToken) {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         } else if (!addressId && (!address1 || !address2 || !pincode || !cityId || !addressType || !contactPersonName ||
            !contactPersonNumber)) {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         } else {
            const users = new Users(userId, false, false, false, false, false, jwToken);
            users.updateOrCreateAddress(addressId, address1, address2, cityId, pincode, contactPersonName, contactPersonNumber,
               addressType, gpsLat, gpsLong, deliveryInstructions, isDefault).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
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