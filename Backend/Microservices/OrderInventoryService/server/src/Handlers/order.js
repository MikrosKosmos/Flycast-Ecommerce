const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Order = require("./../Entity/order");
const orderHandler = {};
/**
 * Method to handle the order requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
orderHandler.order = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         //TODO:
      } else if (method === constants.HTTP_POST) {
         const orderDate = validators.validateDate(dataObject[constants.ORDER_DATE]) ?
            dataObject.postData[constants.ORDER_DATE] : false;
      } else if (method === constants.HTTP_PUT) {
         //TODO:
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};
/**
 * Exporting the order handler.
 */
module.exports = orderHandler;