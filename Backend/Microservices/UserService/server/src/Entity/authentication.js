const constants = require("./../Helpers/constants");
const printer = require("./../Helpers/printer");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const database = require("./../Services/databaseService");
const {getToken, validateToken} = require("./../Services/jwTokenGenerator");
const notificationManager = require("./../Helpers/notificationManager");

class Authentication {
   /**
    *
    * @param phone
    * @param email
    */
   constructor(phone, email) {
      this._phone = validators.validatePhone(phone) ? phone : false;
      this._email = validators.validateEmail(email) ? email : false;
   }

   /**
    * Method to request and send OTP to a number.
    * @param extraData: The extra data that needs to be stored with the OTP.
    * @returns {Promise<Array>}
    */
   createAndSendOTP(extraData) {
      return new Promise(async (resolve, reject) => {
         try {
            const otp = generator.generateOTP();
            const validity = generator.generateAheadTime(1);
            const otpMessage = constants.OTP_MESSAGE + otp;
            await notificationManager.sendSMS(otpMessage, this._phone);
            database.runSp(constants.SP_VALIDATE_OR_CREATE_OTP, [this._phone, otp, validity, 0,
               validators.validateString(extraData) ? extraData : false
            ]).then(_resultSet => {
               const result = _resultSet[0][0].id;
               if (result > 0) {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {"id": 1}]);
               } else {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
               }
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to validate the OTP entered by the user.
    * @param otp: The OTP entered.
    * @returns {Promise<Array>}: The array with the response code and the result.
    */
   validateOTP(otp) {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_VALIDATE_OR_CREATE_OTP, [this._phone, otp, false, 1, false])
            .then(_resultSet => {
               const result = _resultSet[0][0];
               if (result.id > 0) {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
               } else {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
               }
            }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }

   /**
    * Method to validate the user token.
    * @param jwToken: The User Token.
    * @returns {Promise<Array>}:
    */
   validateUserToken(jwToken) {
      return new Promise((resolve, reject) => {
         const userData = validateToken(jwToken);
         resolve([constants.RESPONSE_SUCESS_LEVEL_1, userData]);
      });
   }

   /**
    * Method to login for a user.
    * @param password: The password
    * @param otp: The OTP.
    * @returns {Promise<Array>}:
    */
   login(password, otp) {
      return new Promise((resolve, reject) => {
         if ((this._phone && otp) || (this._email && password)) {
            database.runSp(constants.SP_VALIDATE_LOGIN, [this._phone,
               validators.validateNumber(otp) ? otp : false,
               this._email,
               validators.validateString(password) ? password : false]).then(_resultSet => {
               const result = _resultSet[0];
               let userObj = {};
               userObj[constants.ID] = result[0][constants.ID];
               userObj[constants.FIRST_NAME] = result[0][constants.FIRST_NAME];
               userObj[constants.LAST_NAME] = result[0][constants.LAST_NAME];
               userObj[constants.JW_TOKEN] = getToken(userObj);
               userObj[constants.EMAIL] = result[0][constants.EMAIL];
               userObj[constants.PHONE_NUMBER] = result[0][constants.PHONE_NUMBER];
               userObj[constants.REFERRAL_CODE] = result[0][constants.REFERRAL_CODE];
               let roles = [];
               for (let oneVal in result[0]) {
                  let oneRole = {};
                  oneRole[constants.ROLE_ID] = oneVal[constants.ROLE_ID];
                  oneRole[constants.ROLE_NAME] = oneVal[constants.ROLE_NAME];
                  oneRole[constants.ROLE_STATUS] = oneVal[constants.ROLE_STATUS];
                  oneRole[constants.STATUS_NAME] = oneVal[constants.STATUS_NAME];
                  roles.push(oneRole);
               }
               userObj[constants.ROLES] = roles;
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, userObj]);
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } else if (this._phone && !otp) {
            resolve(this.createAndSendOTP(false));
         } else {
            reject([constants.ERROR_LEVEL_1, constants.INSUFFICIENT_DATA_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the Auth class.
 */
module.exports = Authentication;