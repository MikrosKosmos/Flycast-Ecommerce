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
   validateBeforeRegister(usedReferralCode) {
      return new Promise((resolve, reject) => {
         const auth = new Authentication(this._phone, false);
         const userObj = {};
         userObj[constants.FIRST_NAME] = this._firstName;
         userObj[constants.LAST_NAME] = this._lastName;
         userObj[constants.GENDER] = this._gender;
         userObj[constants.PHONE_NUMBER] = this._phone;
         userObj[constants.USED_REFERRAL_CODE] = usedReferralCode;
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
    * @returns {Promise<Array>}
    * @param otp: The OTP entered by the user.
    */
   register(otp) {
      return new Promise(async (resolve, reject) => {
         const referralCode = generator.generateRandomToken(8);
         try {
            const auth = new Authentication(this._phone, false);
            const value = await auth.validateOTP(otp);
            if (value[1].id > 0) {
               const userObj = jwtGenerator.validateToken(value[1][constants.EXTRA_DATA]);
               database.runSp(constants.SP_REGISTER_USER, [userObj[constants.FIRST_NAME],
                  userObj[constants.LAST_NAME], userObj[constants.PHONE_NUMBER],
                  validators.validateEmail(userObj[constants.EMAIL]) ? userObj[constants.EMAIL] : false,
                  false, userObj[constants.GENDER], constants.ROLE_CUSTOMER_ID,
                  referralCode, userObj[constants.USED_REFERRAL_CODE]]).then(_resultSet => {
                  this._userId = _resultSet[0][0].id;
                  if (this._userId > 0) {
                     delete userObj[constants.EMAIL];
                     delete userObj[constants.PHONE_NUMBER];
                     delete userObj[constants.USED_REFERRAL_CODE];
                     delete userObj.iat;
                     delete userObj.exp;
                     let roles = [];
                     const oneRole = {id: constants.ROLE_CUSTOMER_ID, role_name: constants.ROLE_CUSTOMER};
                     roles.push(oneRole);
                     userObj[constants.ROLES] = roles;
                     userObj[constants.ID] = this._userId;
                     userObj[constants.JW_TOKEN] = jwtGenerator.getToken(userObj);
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, userObj]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               resolve(value);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.INTERNAL_SERVER_ERROR_CODE, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to update the user basic details and authentication credentials.
    * @param password: The password of the user.
    * @returns {Promise<Array>};
    */
   updateDetails(password) {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_UPDATE_USER_DETAILS, [this._userId, this._firstName,
            this._lastName, this._email,
            validators.validateString(password) ? password : false, this._phone]).then(_resultSet => {
            resolve([constants.RESPONSE_SUCESS_LEVEL_1, _resultSet[0][0]]);
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Users;