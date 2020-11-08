const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Sku = require("./../Entity/sku");
const skuHandler = {};
/**
 * Method to handle the requests for SKU.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
skuHandler.sku = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const brand = validators.validateString(dataObject.queryString[constants.BRAND]) ?
            dataObject.queryString[constants.BRAND] : false;
         const model = validators.validateString(dataObject.queryString[constants.MODEL]) ?
            dataObject.queryString[constants.MODEL] : false;
         const skuValue = validators.validateString(dataObject.queryString[constants.SKU]) ?
            dataObject.queryString[constants.SKU] : false;
         if (jwToken && (skuValue || brand || model)) {
            const sku = new Sku(brand, model, false, false, false, false, skuValue);
            sku.getSku(jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_POST) {
         const brand = validators.validateString(dataObject.postData[constants.BRAND]) ?
            dataObject.postData[constants.BRAND] : false;
         const model = validators.validateString(dataObject.postData[constants.MODEL]) ?
            dataObject.postData[constants.MODEL] : false;
         const color = validators.validateString(dataObject.postData[constants.COLOR]) ?
            dataObject.postData[constants.COLOR] : false;
         const grade = validators.validateString(dataObject.postData[constants.PRODUCT_GRADE]) ?
            dataObject.postData[constants.PRODUCT_GRADE] : false;
         const storage = validators.validateString(dataObject.postData[constants.STORAGE]) ?
            dataObject.postData[constants.STORAGE] : false;
         const parentCategory = validators.validateNumber(dataObject.postData[constants.PARENT_CATEGORY]) ?
            dataObject.postData[constants.PARENT_CATEGORY] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (brand && model && color && grade && parentCategory && jwToken) {
            const sku = new Sku(brand, model, color, grade, storage, parentCategory, false);
            sku.createSku(jwToken).then(response => {
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
 * Exporting the SKU handler.
 */
module.exports = skuHandler;