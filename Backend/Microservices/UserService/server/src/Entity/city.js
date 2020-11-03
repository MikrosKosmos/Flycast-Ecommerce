const constants = require("./../Helpers/constants");
const generator = require("validatorswithgenerators").generators;
const validators = require("validatorswithgenerators").validators;
const database = require("./../Services/databaseService");
const printer = require("./../Helpers/printer");

class City {
   /**
    * _cityId
    * _cityName
    * @param cityId
    * @param cityName
    */
   constructor(cityId, cityName) {
      this._cityId = validators.validateNumber(cityId) ? cityId : false;
      this._cityName = validators.validateString(cityName) ? cityName : false;
   }

   /**
    * Method to get the list of states.
    * @returns {Promise<Array>}: An Array of states.
    */
   searchState() {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_GET_STATE, []).then(_resultSet => {
            const result = _resultSet[0];
            if (validators.validateUndefined(result)) {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
            } else {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, []]);
            }
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }

   /**
    * Method to search for cities with the state id.
    * @param stateId: The state id.
    * @returns {Promise<Array>}: An array of cities.
    */
   searchCity(stateId) {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_GET_CITY, [this._cityName,
            validators.validateNumber(stateId) ? stateId : false]).then(_resultSet => {
            const result = _resultSet[0];
            if (validators.validateUndefined(result)) {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
            } else {
               resolve([constants.RESPONSE_SUCESS_LEVEL_1, []]);
            }
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }
}

/**
 * Exporting the module.
 */
module.exports = City;