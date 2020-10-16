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
    * @param jwToken
    */
   constructor(userId, firstName, lastName, gender, email, phone, jwToken) {
      this._userId = validators.validateNumber(userId) ? Number(userId) : false;
      this._firstName = validators.validateString(firstName) ? firstName : false;
      this._lastName = validators.validateString(lastName) ? lastName : false;
      this._gender = validators.validateCharacter(gender) ? gender : false;
      this._email = validators.validateEmail(email) ? email : false;
      this._phone = validators.validatePhone(phone) ? phone : false;
      this._token = validators.validateString(jwToken) ? jwToken : false;
   }

   /**
    * Method to validate the user token.
    * @param jwToken: the token to be validated.
    * @returns {object | null}
    * @private
    */
   _validateUserToken(jwToken) {
      return jwtGenerator.validateToken(jwToken);
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
         const userData = this._validateUserToken(this._token);
         if (validators.validateUndefined(userData) && userData[constants.ID] === this._userId) {
            database.runSp(constants.SP_UPDATE_USER_DETAILS, [this._userId, this._firstName,
               this._lastName, this._email,
               validators.validateString(password) ? password : false, this._phone]).then(_resultSet => {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, _resultSet[0][0]]);
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } else {
            reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
         }
      });
   }

   /**
    * Method to update or insert a new address for a user.
    * @param addressId: the Address id for updating, else 0.
    * @param address1: The address 1.
    * @param address2: The address line 2.
    * @param cityId: the city id.
    * @param pincode: The pincode of address.
    * @param contactPersonName: The contact person for the address.
    * @param contactPersonNumber: The contact person number.
    * @param addressType: The address type.
    * @param gpsLat: The GPS lat.
    * @param gpsLong: The GPS Long.
    * @param deliveryInstructions: The delivery instructions.
    * @param isDefault: 1 for default address, else 0.
    * @returns {Promise<Array>}:
    */
   updateOrCreateAddress(addressId, address1, address2, cityId, pincode, contactPersonName, contactPersonNumber, addressType,
                         gpsLat, gpsLong, deliveryInstructions, isDefault) {
      return new Promise((resolve, reject) => {
         const userData = jwtGenerator.validateToken(this._token);
         if (validators.validateUndefined(userData) && userData[constants.ID] === this._userId) {
            database.runSp(constants.SP_INSERT_UPDATE_ADDRESS, [this._userId,
               validators.validateNumber(addressId) ? addressId : 0,
               validators.validateString(address1) ? address1 : false,
               validators.validateString(address2) ? address2 : false,
               validators.validateNumber(cityId) ? cityId : false,
               validators.validateNumber(pincode) ? pincode : false,
               validators.validateString(contactPersonName) ? contactPersonName : false,
               validators.validatePhone(contactPersonNumber) ? contactPersonNumber : false,
               validators.validateString(addressType) ? addressType : false,
               validators.validateNumber(gpsLat) ? gpsLat : false,
               validators.validateNumber(gpsLong) ? gpsLong : false,
               validators.validateString(deliveryInstructions) ? deliveryInstructions : false,
               validators.validateNumber(isDefault) ? isDefault : 0]).then(_resultSet => {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, _resultSet[0][0]]);
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } else {
            reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
         }
      });
   }

   /**
    * Method to get the user address.
    * @returns {Promise<Array>}: The response code and the user address.
    */
   getUserAddress() {
      return new Promise((resolve, reject) => {
         const userData = jwtGenerator.validateToken(this._token);
         if (validators.validateUndefined(userData) && userData[constants.ID] === this._userId) {
            database.runSp(constants.SP_GET_USER_ADDRESS, [this._userId]).then(_resultSet => {
               const result = _resultSet[0];
               if (validators.validateUndefined(result)) {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
               } else {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
               }
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } else {
            reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Users;