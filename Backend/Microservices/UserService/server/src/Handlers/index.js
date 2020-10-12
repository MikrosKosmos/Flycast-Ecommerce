const handlerObj = {};
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const constants = require("./../Helpers/constants");
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
 * Exporting the handler object.
 */
module.exports = handlerObj;