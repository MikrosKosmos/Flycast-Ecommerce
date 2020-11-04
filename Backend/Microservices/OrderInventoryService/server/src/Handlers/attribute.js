const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Attribute = require("./../Entity/attribute");
const attributeHandler = {};
/**
 * Method to handle the requests for attributes.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
attributeHandler.attribute = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_POST) {
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const attributeList = validators.validateUndefined(dataObject.postData[constants.ATTRIBUTES]) ?
            dataObject.postData[constants.ATTRIBUTES] : false;
         if (attributeList && jwToken) {
            const attribute = new Attribute();
            attribute.createAttribute(attributeList, jwToken).then(response => {
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
 * Exporting the module.
 */
module.exports = attributeHandler;