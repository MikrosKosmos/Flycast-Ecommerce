const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Category = require("./../Entity/category");
const categoryHandler = {};
/**
 * Method to handle the requests for Category.
 * @param dataObject: The request object
 * @returns {Promise<Array>}:
 */
categoryHandler.category = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const categoryId = validators.validateNumber(dataObject.queryString[constants.CATEGORY_ID]) ?
            dataObject.queryString[constants.CATEGORY_ID] : false;
         const category = new Category(categoryId);
         category.getCategory().then(response => {
            resolve(responseGenerator.generateResponse(response[1], response[0]));
         }).catch(err => {
            reject(responseGenerator.generateErrorResponse(err[1], err[0]));
         });
      } else if (method === constants.HTTP_POST) {
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const categoryList = validators.validateUndefined(dataObject.postData[constants.CATEGORIES]) ?
            dataObject.postData[constants.CATEGORIES] : false;
         if (jwToken && categoryList) {
            const category = new Category();
            category.createCategory(categoryList, jwToken).then(response => {
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
 * Method to handle the requests for category attributes.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
categoryHandler.attributes = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         //TODO:
      } else if (method === constants.HTTP_POST) {
         const categoryId = validators.validateNumber(dataObject.postData[constants.CATEGORY_ID]) ?
            dataObject.postData[constants.CATEGORY_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         const attributes = validators.validateUndefined(dataObject.postData[constants.ATTRIBUTES]) ?
            dataObject.postData[constants.ATTRIBUTES] : false;
         if (categoryId && jwToken && attributes) {
            const category = new Category(categoryId);
            category.createCategoryAttribute(attributes, jwToken).then(response => {
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
}
/**
 * Exporting the module.
 */
module.exports = categoryHandler;