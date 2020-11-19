const printer = require("./../Helpers/printer");
const orderPaymentProcessor = require("./orderPaymentProcessor");
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
         orderPaymentProcessor.processPayment();
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Workers;