const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const printer = require("./../Helpers/printer");
const utils = require("./../Helpers/utils");
const SQSHelper = require("./../Helpers/sqsHelper");

class Order {
   /**
    *
    * @param orderId
    * @param flyCastOrderId
    */
   constructor(orderId, flyCastOrderId) {
      this._orderId = validators.validateNumber(orderId) ? orderId : false;
      this._flycastOrderId = validators.validateString(flyCastOrderId) ? flyCastOrderId : false;
   }

   /**
    * Method to request for Payment capture for the order.
    * @param transactionId: The transaction id.
    * @param baseAmount: The base amount of the order.
    * @param couponCode: The coupon code entered by the user.
    * @param jwToken: The token of the user.
    * @private
    */
   _requestPaymentCapture(transactionId, baseAmount, couponCode, jwToken) {
      const sqs = new SQSHelper(constants.SQS_ORDER_TO_PAYMENT_QUEUE_URL);
      const message = {};
      message[constants.ORDER_ID] = this._orderId;
      message[constants.TRANSACTION_ID] = transactionId;
      message[constants.BASE_AMOUNT] = baseAmount;
      message[constants.COUPON_CODE] = couponCode;
      message[constants.JW_TOKEN] = jwToken;
      sqs.sendMessage(message, this._flycastOrderId, "orderGroup" + this._orderId).then(response => {
         printer.printLog(response);
         printer.printHighlightedLog("Payment Capture request send for Order ID: " + this._orderId);
      }).catch(err => {
         printer.printError("Payment Capture request FAILED for Order ID: " + this._orderId);
         printer.printError(err);
      });
   }

   /**
    * Method to create a order.
    * @param orderDate: The date of the order.
    * @param addressId: The address of the user where it is to be delivered.
    * @param couponCode: The coupon code entered by the user.
    * @param baseAmount: The base amount.
    * @param discount: The discount amount.
    * @param replaceOrderId: If replace order, then id, else NaN.
    * @param productsArray: The json array containing the sku and quantity of the order.
    * @param transactionId: The payment transaction id.
    * @param jwToken: The token of the user placing the order.
    * @returns {Promise<Array>}:
    */
   createOrder(orderDate, addressId, couponCode, baseAmount, discount, replaceOrderId, productsArray, transactionId, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_CUSTOMER_ID)) {
               this._flycastOrderId = utils.generateOrderId(orderDate, addressId, userData[constants.ID], baseAmount);
               database.runSp(constants.SP_CREATE_ORDER, [this._flycastOrderId, orderDate, userData[constants.ID],
                  addressId, baseAmount, discount, replaceOrderId, JSON.stringify(productsArray)]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result) && result[constants.ORDER_ID] > 0) {
                     this._orderId = result[constants.ORDER_ID];
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
                     this._requestPaymentCapture(transactionId, baseAmount, couponCode, jwToken);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
                  }
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to update the order status.
    * @param statusId: The status id to be updated with.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   updateOrderStatus(statusId, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_UPDATE_ORDER_STATUS, [this._orderId, statusId, userData[constants.ID]])
                  .then(_resultSet => {
                     const result = _resultSet[0][0];
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
                  }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the order class.
 */
module.exports = Order;