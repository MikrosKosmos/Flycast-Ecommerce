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
      if (method === constants.HTTP_GET) {
         const categoryId = validators.validateNumber(dataObject.queryString[constants.CATEGORY_ID]) ?
            dataObject.queryString[constants.CATEGORY_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const attributeId = validators.validateNumber(dataObject.queryString[constants.ATTRIBUTE_ID]) ?
            dataObject.queryString[constants.ATTRIBUTE_ID] : false;
         if (categoryId && jwToken) {
            const attribute = new Attribute();
            attribute.getAttributesByCategoryId(categoryId, jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else if (attributeId && jwToken) {
            const attribute = new Attribute(attributeId);
            attribute.getPossibleValues(jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            const attribute = new Attribute();
            attribute.getAllAttributes().then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         }
      } else if (method === constants.HTTP_POST) {
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const attributeList = validators.validateUndefined(dataObject.postData[constants.ATTRIBUTES]) ?
            dataObject.postData[constants.ATTRIBUTES] : false;
         const possibleValues = validators.validateArray(dataObject.postData[constants.ATTRIBUTE_VALUES]) ?
            dataObject.postData[constants.ATTRIBUTE_VALUES] : false;
         const attributeId = validators.validateNumber(dataObject.postData[constants.ATTRIBUTE_ID]) ?
            dataObject.postData[constants.ATTRIBUTE_ID] : false;
         if (attributeList && jwToken) {
            const attribute = new Attribute();
            attribute.createAttribute(attributeList, jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else if (attributeId && possibleValues && jwToken) {
            const attribute = new Attribute(attributeId);
            attribute.createPossibleValues(possibleValues, jwToken).then(response => {
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
 * Method to handle the requests for Attributes SKU.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
attributeHandler.sku = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const sku = validators.validateString(dataObject.queryString[constants.SKU]) ?
            dataObject.queryString[constants.SKU] : false;
         if (sku) {
            const attribute = new Attribute();
            attribute.getAttributeBySku(sku).then(response => {
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