const validators = require('validatorswithgenerators').validators;
const database = require('./../Services/databaseService');
const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');

class Api {
   /**
    * _apiToken
    * _apiKey
    * _requestKey
    * @param apiToken
    * @param apiKey
    * @param requestKey
    */
   constructor(apiToken, apiKey, requestKey) {
      this._apiToken = validators.validateString(apiToken) ? apiToken : false;
      this._apiKey = validators.validateString(apiKey) ? apiKey : false;
      this._requestKey = validators.validateString(requestKey) ? requestKey : false;
   }

   /**
    * Method to check whether the API Token is valid or not.
    * @returns {Promise<>}
    */
   validateToken() {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_CHECK_API_TOKEN, [this._apiToken]).then(_resultSet => {
            const result = _resultSet[0][0];
            if (result[constants.IS_VALID] === 1) {
               resolve(true);
            } else {
               reject([constants.ERROR_LEVEL_4, false]);
            }
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_4, false]);
         });
      });
   }

   /**
    * Method to log the API Status.
    * @param requestKey: the request key.
    * @param path: The path API end point.
    * @param responseCode: The response code.
    */
   logAPIStatus(requestKey, path, responseCode) {
      let apiStatus;
      if (responseCode === constants.HTTP_SUCCESS) {
         apiStatus = constants.STATUS_COMPLETED;
      } else if (responseCode === constants.HTTP_ACCEPTED_OKAY) {
         apiStatus = constants.STATUS_PROCESSING;
      } else {
         apiStatus = constants.STATUS_ERROR;
      }
      database.runSp(constants.SP_LOG_API_STATUS, [requestKey, path, apiStatus, responseCode, this._apiToken])
         .then(_resultSet => {
            printer.printError("API Status Logged.");
         }).catch(err => {
         printer.printError(err);
      });
   }
}

module.exports = Api;