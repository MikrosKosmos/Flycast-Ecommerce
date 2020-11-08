const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Cart = require("./../Entity/cart");
const cartHandler = {};
/**
 * Method to handle the cart requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
cartHandler.cart = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (jwToken) {
            const cart = new Cart();
            cart.getCartDetails(jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_PUT) {
         const sku = validators.validateString(dataObject.postData[constants.SKU]) ?
            dataObject.postData[constants.SKU] : false;
         const quantity = validators.validateUndefined(dataObject.postData[constants.QUANTITY]) ?
            dataObject.postData[constants.QUANTITY] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (sku && quantity > -1 && jwToken) {
            const cart = new Cart(false, sku, quantity);
            cart.createOrUpdate(jwToken).then(response => {
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
 * Exporting the cart handler.
 */
module.exports = cartHandler;