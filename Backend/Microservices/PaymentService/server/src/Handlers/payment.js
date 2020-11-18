const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const paymentHandler = {};
const Payment = require("./../Entity/payment");
/**
 * Method to handle the requests for Payment.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
paymentHandler.payment = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const orderId = validators.validateNumber(dataObject.queryString[constants.ORDER_ID]) ?
            dataObject.queryString[constants.ORDER_ID] : false;
         const paymentId = validators.validateNumber(dataObject.queryString[constants.PAYMENT_ID]) ?
            dataObject.queryString[constants.PAYMENT_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (jwToken && (orderId || paymentId)) {
            const payment = new Payment(paymentId, orderId);
            payment.getPaymentDetails(jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_POST) {
         const orderId = validators.validateNumber(dataObject.postData[constants.ORDER_ID]) ?
            dataObject.postData[constants.ORDER_ID] : false;
         const transactionId = validators.validateString(dataObject.postData[constants.TRANSACTION_ID]) ?
            dataObject.postData[constants.TRANSACTION_ID] : false;
         const baseAmount = validators.validateNumber(dataObject.postData[constants.BASE_AMOUNT]) ?
            dataObject.postData[constants.BASE_AMOUNT] : false;
         const couponCode = validators.validateString(dataObject.postData[constants.COUPON_CODE]) ?
            dataObject.postData[constants.COUPON_CODE] : false;
         const categoryId = validators.validateNumber(dataObject.postData[constants.CATEGORY_ID]) ?
            dataObject.postData[constants.CATEGORY_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (orderId && transactionId && baseAmount && categoryId && jwToken) {
            const payment = new Payment(false, orderId, transactionId);
            payment.createAndCapturePayment(baseAmount, couponCode, categoryId, jwToken).then(response => {
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
 * Exporting the Payment Handler.
 */
module.exports = paymentHandler;