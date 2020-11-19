const printer = require("./../Helpers/printer");
const orderStatusProcessor = require("./orderStatusProcessor");
const scheduler = require("node-schedule");

class Workers {
   constructor() {
   }

   /**
    * Method to initialize the Worker.
    */
   init() {
      printer.printHighlightedLog("Workers Scheduled...");
      this._getMessagesFromPaymentToOrderQueue();
   }

   /**
    * Method to fetch messages from payment to order queue.
    * @private
    */
   _getMessagesFromPaymentToOrderQueue() {
      scheduler.scheduleJob('0/1 * * * *', () => {
         orderStatusProcessor.updateOrderStatus();
      });
   }
}

/**
 * Exporting the workers class.
 */
module.exports = Workers;