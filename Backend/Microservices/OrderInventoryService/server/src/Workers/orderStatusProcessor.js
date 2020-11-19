const constants = require("./../Helpers/constants");
const SQSHelper = require("./../Helpers/sqsHelper");
const printer = require("./../Helpers/printer");
const Order = require("./../Entity/order");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const orderStatusProcessorHandler = {};
/**
 * Method to update the order status by processing the payment message.
 */
orderStatusProcessorHandler.updateOrderStatus = () => {
   try {
      const sqs = new SQSHelper(constants.SQS_PAYMENT_TO_ORDER_QUEUE_URL);
      sqs.receiveMessages(1).then(messages => {
         if (validators.validateUndefined(messages) && messages.length > 0) {
            const messageBody = generator.generateParsedJSON(messages[0][constants.SQS_BODY]);
            const receiptHandle = messages[0][constants.SQS_RECEIPT_HANDLE];
            const order = new Order(messageBody[constants.ORDER_ID]);
            const isPaymentConfirmed = messageBody[constants.IS_PAYMENT_CONFIRMED];
            let statusId = 0;
            if (isPaymentConfirmed) {
               statusId = constants.STATUS_CONFIRMED;
            } else {
               statusId = constants.STATUS_PAYMENT_ERROR;
            }
            order.updateOrderStatus(statusId, messageBody[constants.JW_TOKEN]).then(async response => {
               printer.printLog(response[1]);
               printer.printHighlightedLog("Order Status changed for OrderID: " + messageBody[constants.ORDER_ID]);
               await sqs.deleteMessages(receiptHandle);
               printer.printHighlightedLog("Messages deleted from Payment_TO_Order: " + receiptHandle);
            }).catch(err => {
               printer.printHighlightedLog(err);
            });
         } else {
            printer.printHighlightedLog("No new messages from Payment.");
         }
      }).catch(err => {
         printer.printError(err);
      });
   } catch (e) {
      printer.printError(e);
   }
};

/**
 * exporting the module.
 */
module.exports = orderStatusProcessorHandler;