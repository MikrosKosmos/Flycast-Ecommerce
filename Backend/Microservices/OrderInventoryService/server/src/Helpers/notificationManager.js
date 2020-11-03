const notificationManager = {};
const validator = require('validatorswithgenerators').validators;
const printer = require('./printer');
const aws = require('./awsHelper');
/**
 * Method to send SMS using AWS SNS.
 * @param msg: The message to be send.
 * @param address: The destination mobile number.
 * @returns {Promise<Boolean>}: true if success.
 */
notificationManager.sendSMS = (msg, address) => {
   return new Promise((resolve, reject) => {
      if (!validator.validatePhone(address)) {
         reject(false);
         return;
      }
      if (!address.startsWith("+91")) {
         address = "+91" + address;
      }
      const msgParams = {
         Message: msg,
         MessageStructure: 'string',
         PhoneNumber: address
      };
      aws.sns.publish(msgParams, (err, data) => {
         if (err) {
            printer.printError(err);
            reject(err);
         } else {
            printer.printLog(data);
            printer.printLog("SMS Send.");
            resolve(true);
         }
      });
   });
};
/**
 * Exporting the notification manager.
 */
module.exports = notificationManager;