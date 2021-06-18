const handlerObj = {};
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const constants = require("./../Helpers/constants");
const responseGenerator = require("./../Services/responseGenerator");
const users = require("./users");
const auth = require("./authentication");
const city = require("./city");
/**
 * Method to handle the Error path requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}: The response object with the Message and the HTTP Code.
 */
handlerObj.notFound = (dataObject) => {
   return new Promise((reject) => {
      reject([constants.INVALID_PATH, constants.HTTP_NOT_FOUND_CODE]);
   });
};
/**
 * Method to handle the auth requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}
 */
handlerObj.auth = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "auth":
            promise = auth.auth(dataObject);
            break;
         case "token":
            promise = auth.token(dataObject);
            break;
         case "phone":
            promise = auth.phone(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the users requests.
 * @param dataObject
 * @returns {Promise<unknown>}
 */
handlerObj.users = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "users":
            promise = users.users(dataObject);
            break;
         case "address":
            promise = users.address(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the requests for City and state.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
handlerObj.city = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "city":
            promise = city.city(dataObject);
            break;
         case "state":
            promise = city.state(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};

/**
 * Exporting the handler object.
 */
module.exports = handlerObj;