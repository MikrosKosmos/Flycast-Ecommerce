const handlerObj = {};
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const constants = require("./../Helpers/constants");
const responseGenerator = require("./../Services/responseGenerator");
const attribute = require("./attribute");

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
 * Method to handle the attribute lists.
 * @param dataObject: the request object.
 * @returns {Promise<Array>}
 */
handlerObj.attribute = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "attribute":
            promise = attribute.attribute(dataObject);
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