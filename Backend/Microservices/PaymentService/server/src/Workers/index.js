const constants = require("./../Helpers/constants");
const SQSHelper = require("./../Helpers/sqsHelper");
const printer = require("./../Helpers/printer");
const Payment = require("./../Entity/payment");
const validators = require("validatorswithgenerators").validators;
const scheduler = require("node-schedule");

class Workers {
   constructor() {
   }

   /**
    * Method to initialize the workers.
    */
   init() {
      printer.printLog("Workers Scheduled...");
      this._getMessagesFromOrderQueue();
   }

   /**
    * Method to get messages from the Order Queue.
    * @private
    */
   _getMessagesFromOrderQueue() {
      scheduler.scheduleJob('0/1 * * * *', () => {
         const sqs = new SQSHelper(constants.SQS_ORDER_TO_PAYMENT_QUEUE_URL);
         sqs.receiveMessages(1).then(messages => {
            if (validators.validateArray(messages) && messages.length > 0) {
               const messageBody = messages[0][constants.SQS_BODY];
               const receiptHandle = messages[0][constants.SQS_RECEIPT_HANDLE];
               const payment = new Payment(false, messageBody[constants.ORDER_ID]);
               payment.createAndCapturePayment(messageBody[constants.BASE_AMOUNT],
                  messageBody[constants.COUPON_CODE], messageBody[constants.JW_TOKEN]).then(async response => {
                  printer.printHighlightedLog(response[1]);
                  await sqs.deleteMessages(receiptHandle);
                  //TODO:Send Message to order.
               }).catch(err => {
                  printer.printError(err);
               });
            } else {
               printer.printHighlightedLog("No new Messages from Order.");
            }
         }).catch(err => {
            printer.printError(err);
         });
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Workers;