const constants = require("./../Helpers/constants");
const printer = require("./../Helpers/printer");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const database = require("./../Services/databaseService");
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
}

/**
 * Exporting the Auth class.
 */
module.exports = Authentication;