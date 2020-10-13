const constants = require("./../Helpers/constants");
const generator = require("validatorswithgenerators").generators;
const validators = require("validatorswithgenerators").validators;
const database = require("./../Services/databaseService");
const jwtGenerator = require("./../Services/jwTokenGenerator");
const printer = require("./../Helpers/printer");

const Authentication = require("./authentication");

class Users {
   /**
    *
    * @param userId
    * @param firstName
    * @param lastName
    * @param gender
    * @param email
    * @param phone
    */
   constructor(userId, firstName, lastName, gender, email, phone) {
      this._userId = validators.validateNumber(userId) ? userId : false;
      this._firstName = validators.validateString(firstName) ? firstName : false;
      this._lastName = validators.validateString(lastName) ? lastName : false;
      this._gender = validators.validateCharacter(gender) ? gender : false;
      this._email = validators.validateEmail(email) ? email : false;
      this._phone = validators.validatePhone(phone) ? phone : false;
   }

   /**
    * Method to validate the phone with OTP before registering.
    * @returns {Promise<Array>}
    */
   validateBeforeRegister() {
      return new Promise((resolve, reject) => {
         const auth = new Authentication(this._phone, false);
         const userObj = {};
         userObj[constants.FIRST_NAME] = this._firstName;
         userObj[constants.LAST_NAME] = this._lastName;
         userObj[constants.GENDER] = this._gender;
         userObj[constants.PHONE_NUMBER] = this._phone;
         const jwToken = jwtGenerator.getToken(userObj);
         auth.createAndSendOTP(jwToken).then(response => {
            resolve(response);
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }

   /**
    * Method to register a user.
    * @param password: The password of the user.
    * @param usedReferralCode: The referral code used by the user.
    * @returns {Promise<Array>}
    */
   register(password, usedReferralCode) {
      return new Promise((resolve, reject) => {
         const referralCode = generator.generateRandomToken(8);

      });
   }
}

/**
 * Exporting the class.
 * @type {Users}
 */
module.exports = Users;