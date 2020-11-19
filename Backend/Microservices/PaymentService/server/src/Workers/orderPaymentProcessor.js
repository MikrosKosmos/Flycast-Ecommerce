const constants = require("./../Helpers/constants");
const SQSHelper = require("./../Helpers/sqsHelper");
const printer = require("./../Helpers/printer");
const Payment = require("./../Entity/payment");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const orderPaymentProcessor = {};
/**
 * Method to process the payment for the order.
 */
orderPaymentProcessor.processPayment = () => {
   try {
      const sqs = new SQSHelper(constants.SQS_ORDER_TO_PAYMENT_QUEUE_URL);
      sqs.receiveMessages(1).then(messages => {
         if (validators.validateArray(messages) && messages.length > 0) {
            const messageBody = generator.generateParsedJSON(messages[0][constants.SQS_BODY]);
            const receiptHandle = messages[0][constants.SQS_RECEIPT_HANDLE];
            const payment = new Payment(false, messageBody[constants.ORDER_ID], messageBody[constants.TRANSACTION_ID]);
            payment.createAndCapturePayment(messageBody[constants.BASE_AMOUNT],
               messageBody[constants.COUPON_CODE], messageBody[constants.JW_TOKEN]).then(async response => {
               printer.printHighlightedLog(response[1]);
               await sqs.deleteMessages(receiptHandle);
               let messageForOrder = {};
               messageForOrder[constants.IS_PAYMENT_CONFIRMED] = response[1][constants.ID] > 0 ? 1 : 0;
               messageForOrder[constants.JW_TOKEN] = messageBody[constants.JW_TOKEN];
               messageForOrder[constants.ORDER_ID] = messageBody[constants.ORDER_ID];
               _sendMessageToOrder(messageForOrder, messageBody[constants.ORDER_ID]);
            }).catch(err => {
               printer.printError(err);
            });
         } else {
            printer.printHighlightedLog("No new Messages from Order.");
         }
      }).catch(err => {
         printer.printError(err);
      });
   } catch (e) {
      printer.printError(e);
   }
};

/**
 * Method to send message to order.
 * @param message: The message to send.
 * @param orderId: The order id.
 * @private
 */
function _sendMessageToOrder(message, orderId) {
   const sqs = new SQSHelper(constants.SQS_PAYMENT_TO_ORDER_QUEUE_URL);
   sqs.sendMessage(message, orderId + "", "Group" + orderId).then(response => {
      printer.printHighlightedLog("Message send to Order for OrderId :" + orderId);
   }).catch(err => {
      printer.printError(err);
   });
}

/**
 * Exporting the module.
 */
module.exports = orderPaymentProcessor;