const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const printer = require("./../Helpers/printer");

class Attribute {
   /**
    * _attributeId
    * @param attributeId
    */
   constructor(attributeId) {
      this._attributeId = validators.validateNumber(attributeId) ? attributeId : false;
   }

   createAttribute(attributeLists) {
      return new Promise((resolve, reject) => {
         
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = Attribute;