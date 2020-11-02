const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const printer = require('./../Helpers/printer');
const cityHandler = {};

const City = require("./../Entity/city");
/**
 * Method to handle the city requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
cityHandler.city = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const cityName = validators.validateString(dataObject.queryString[constants.CITY_NAME]) ?
            dataObject.queryString[constants.CITY_NAME] : false;
         const stateId = validators.validateNumber(dataObject.queryString[constants.STATE_ID]) ?
            dataObject.queryString[constants.STATE_ID] : false;
         if (cityName || stateId) {
            const city = new City(false, cityName);
            city.searchCity(stateId).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};
/**
 * Method to handle the requests for state.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
cityHandler.state = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const city = new City(false, false);
         city.searchState().then(response => {
            resolve(responseGenerator.generateResponse(response[1], response[0]));
         }).catch(err => {
            reject(responseGenerator.generateErrorResponse(err[1], err[0]));
         });
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};

/**
 * Exporting the module.
 */
module.exports = cityHandler;