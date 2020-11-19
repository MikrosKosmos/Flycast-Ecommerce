const awsHelper = require("./awsHelper");
const constants = require("./constants");
const validators = require("validatorswithgenerators").validators;
const printer = require("./printer");

class SqsHelper {
   /**
    *
    * @param queueURL
    */
   constructor(queueURL) {
      this._queueUrl = validators.validateString(queueURL) ? queueURL : false;
   }

   /**
    * Method to send message to the Initialized queue.
    * @param messageBody: The JSON object that needs to be send.
    * @param deduplicationId: The message deduplication id.
    * @param groupId: The message Group Id.
    * @returns {Promise<boolean>}:true,  if send successfully, else false.
    */
   sendMessage(messageBody, deduplicationId, groupId) {
      return new Promise((resolve, reject) => {
         const sendParams = {};
         sendParams[constants.SQS_MESSAGE_BODY] = JSON.stringify(messageBody);
         sendParams[constants.SQS_QUEUE_URL] = this._queueUrl;
         sendParams[constants.SQS_MESSAGE_GROUP_ID] = groupId;
         sendParams[constants.SQS_DEDUPLICATION_ID] = deduplicationId;
         awsHelper.sqs.sendMessage(sendParams, (err, data) => {
            if (err) {
               printer.printError(err);
               reject(false);
            } else {
               printer.printLog(data);
               resolve(true);
            }
         });
      });
   }

   /**
    * Method to receive Message from a queue.
    * @param maxNumberOfMessage: The Max number of message you want to receive.
    * @returns {Promise<Boolean|Array>}: if Error false, else the array of messages.
    */
   receiveMessages(maxNumberOfMessage) {
      return new Promise((resolve, reject) => {
         const receiveParams = {};
         receiveParams[constants.SQS_QUEUE_URL] = this._queueUrl;
         receiveParams[constants.SQS_MAX_NUMBER_OF_MESSAGE] = maxNumberOfMessage;
         awsHelper.sqs.receiveMessage(receiveParams, (err, data) => {
            if (err) {
               printer.printError(err);
               reject(false);
            } else {
               resolve(data.Messages);
            }
         });
      });
   }

   /**
    * Method to delete a message from SQS.
    * @param receiptHandle: The receipt handle of the message.
    * @returns {Promise<Boolean>}: true, if deleted, else false.
    */
   deleteMessages(receiptHandle) {
      return new Promise((resolve, reject) => {
         const deleteParams = {};
         deleteParams[constants.SQS_QUEUE_URL] = this._queueUrl;
         deleteParams[constants.SQS_RECEIPT_HANDLE] = receiptHandle;
         awsHelper.sqs.deleteMessage(deleteParams, (err, data) => {
            if (err) {
               printer.printError(err);
               reject(false);
            } else {
               resolve(true);
            }
         });
      });
   }
}

/**
 * Exporting the SQS Helper class.
 */
module.exports = SqsHelper;