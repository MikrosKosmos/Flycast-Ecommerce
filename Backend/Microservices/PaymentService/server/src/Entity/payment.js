const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");
const tokenValidator = require("./../Helpers/tokenValidator");
const utils = require("./../Helpers/utils");
const razorPayHelper = require("./../Helpers/razorpayHelper").instance;

class Payment {
   /**
    *
    * @param paymentId
    * @param orderId
    * @param transactionId
    */
   constructor(paymentId, orderId, transactionId) {
      this._paymentId = validators.validateNumber(paymentId) ? paymentId : false;
      this._orderId = validators.validateNumber(orderId) ? orderId : false;
      this._transactionId = validators.validateString(transactionId) ? transactionId : false;
   }

   /**
    *
    * @param amountTobeCaptured: The amount to be captured.
    * @param userId: The user creating the payment.
    * @returns {Promise<Boolean>}: true, if capture else ERROR.
    * @private
    */
   _capturePayment(amountTobeCaptured, userId) {
      return new Promise((resolve, reject) => {
         razorPayHelper.payments.capture(this._transactionId, amountTobeCaptured * 100).then(() => {
            printer.printHighlightedLog("Amount Captured for TransactionID :" + this._transactionId);
            database.runSp(constants.SP_UPDATE_PAYMENT_STATUS, [this._paymentId,
               constants.STATUS_PAYMENT_CAPTURED, userId]).then(_resultSet => {
               resolve(true);
            }).catch(err => {
               printer.printError(err);
               resolve(true);
            });
         }).catch(err => {
            printer.printError(err);
            resolve(true);
         });
      });
   }

   /**
    * Method to create and Capture the payment for a transaction.
    * @param baseAmount: The base amount.
    * @param couponCode: The coupon code applied.
    * @param jwToken: The jwToken of the user.
    * @returns {Promise<Array>}:
    */
   createAndCapturePayment(baseAmount, couponCode, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_CREATE_ORDER_PAYMENT, [this._orderId, this._transactionId,
                  baseAmount, validators.validateString(couponCode) ? couponCode : false,
                  userData[constants.ID]]).then(async _resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result) && result[constants.ID] > 0) {
                     this._paymentId = result[constants.ID];
                     const grossAmount = result[constants.GROSS_AMOUNT];
                     await this._capturePayment(grossAmount, userData[constants.ID]);
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
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to get the payment details.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   getPaymentDetails(jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_GET_PAYMENT_DETAILS, [this._orderId, this._paymentId])
                  .then(_resultSet => {
                     const result = _resultSet[0];
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
 * Exporting the Payment module.
 */
module.exports = Payment;