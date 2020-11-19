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
         const orderDate = validators.validateDate(dataObject.postData[constants.ORDER_DATE]) ?
            dataObject.postData[constants.ORDER_DATE] : false;
         const addressId = validators.validateNumber(dataObject.postData[constants.ADDRESS_ID]) ?
            dataObject.postData[constants.ADDRESS_ID] : false;
         const baseAmount = validators.validateNumber(dataObject.postData[constants.BASE_AMOUNT]) ?
            dataObject.postData[constants.BASE_AMOUNT] : false;
         const discount = validators.validateNumber(dataObject.postData[constants.DISCOUNT_AMOUNT]) ?
            dataObject.postData[constants.DISCOUNT_AMOUNT] : 0;
         const couponCode = validators.validateString(dataObject.postData[constants.COUPON_CODE]) ?
            dataObject.postData[constants.COUPON_CODE] : false;
         const replaceOrderId = validators.validateNumber(dataObject.postData[constants.REPLACE_ORDER_ID]) ?
            dataObject.postData[constants.REPLACE_ORDER_ID] : false;
         const productsArray = validators.validateArray(dataObject.postData[constants.ORDER_PRODUCTS]) ?
            dataObject.postData[constants.ORDER_PRODUCTS] : false;
         const transactionId = validators.validateString(dataObject.postData[constants.TRANSACTION_ID]) ?
            dataObject.postData[constants.TRANSACTION_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (orderDate && addressId && baseAmount && discount >= 0 && productsArray && transactionId && jwToken) {
            const order = new Order();
            order.createOrder(orderDate, addressId, couponCode, baseAmount, discount,
               replaceOrderId, productsArray, transactionId, jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
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