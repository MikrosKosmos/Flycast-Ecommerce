const constants = require("./../Helpers/constants");
const validators = require("validatorswithgenerators").validators;
const responseGenerator = require("./../Services/responseGenerator");
const Asset = require("./../Entity/asset");
const assetHandler = {};
/**
 * Method to handle the asset requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
assetHandler.asset = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const assetId = validators.validateNumber(dataObject.queryString[constants.ASSET_ID]) ?
            dataObject.queryString[constants.ASSET_ID] : false;
         const categoryId = validators.validateNumber(dataObject.queryString[constants.CATEGORY_ID]) ?
            dataObject.queryString[constants.CATEGORY_ID] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if ((assetId || categoryId) && jwToken) {
            const asset = new Asset(assetId, false, categoryId);
            asset.getAsset(jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_POST) {
         const assetName = validators.validateString(dataObject.postData[constants.ASSET_NAME]) ?
            dataObject.postData[constants.ASSET_NAME] : false;
         const assetUniqueNumber = validators.validateString(dataObject.postData[constants.ASSET_UNIQUE_NUMBER]) ?
            dataObject.postData[constants.ASSET_UNIQUE_NUMBER] : false;
         const category = validators.validateNumber(dataObject.postData[constants.ASSET_CATEGORY]) ?
            dataObject.postData[constants.ASSET_CATEGORY] : false;
         const subCategory = validators.validateNumber(dataObject.postData[constants.ASSET_SUB_CATEGORY]) ?
            dataObject.postData[constants.ASSET_SUB_CATEGORY] : false;
         const sku = validators.validateString(dataObject.postData[constants.SKU]) ?
            dataObject.postData[constants.SKU] : false;
         const manufacturer = validators.validateString(dataObject.postData[constants.ASSET_MANUFACTERER]) ?
            dataObject.postData[constants.ASSET_MANUFACTERER] : false;
         const grade = validators.validateString(dataObject.postData[constants.PRODUCT_GRADE]) ?
            dataObject.postData[constants.PRODUCT_GRADE] : false;
         const location = validators.validateString(dataObject.postData[constants.ASSET_LOCATION]) ?
            dataObject.postData[constants.ASSET_LOCATION] : false;
         const procurementPrice = validators.validateNumber(dataObject.postData[constants.PROCUREMENT_PRICE]) ?
            dataObject.postData[constants.PROCUREMENT_PRICE] : false;
         const basePrice = validators.validateNumber(dataObject.postData[constants.BASE_PRICE]) ?
            dataObject.postData[constants.BASE_PRICE] : false;
         const sellingPrice = validators.validateNumber(dataObject.postData[constants.SELLING_PRICE]) ?
            dataObject.postData[constants.SELLING_PRICE] : false;
         const attributesValue = validators.validateArray(dataObject.postData[constants.ATTRIBUTE_VALUES]) ?
            dataObject.postData[constants.ATTRIBUTE_VALUES] : false;
         const jwToken = validators.validateString(dataObject[constants.JW_TOKEN]) ?
            dataObject[constants.JW_TOKEN] : false;
         if (assetName && assetUniqueNumber && category && sku && manufacturer && grade && location && procurementPrice &&
            sellingPrice && attributesValue && jwToken) {
            const asset = new Asset(false, assetUniqueNumber, category, subCategory, sku, manufacturer, assetName);
            asset.createAsset(grade, location, procurementPrice, basePrice, sellingPrice, attributesValue, jwToken).then(response => {
               resolve(responseGenerator.generateResponse(response[1], response[0]));
            }).catch(err => {
               reject(responseGenerator.generateErrorResponse(err[1], err[0]));
            });
         } else {
            reject(responseGenerator.generateErrorResponse(constants.INSUFFICIENT_DATA_MESSAGE, constants.ERROR_LEVEL_1));
         }
      } else if (method === constants.HTTP_PUT) {
         //TODO:
      } else {
         reject(responseGenerator.generateErrorResponse(constants.INVALID_METHOD_MESSAGE, constants.ERROR_LEVEL_1));
      }
   });
};
/**
 * Method to handle the asset product requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
assetHandler.products = (dataObject) => {
   return new Promise((resolve, reject) => {
      const method = dataObject.method;
      if (method === constants.HTTP_GET) {
         const asset = new Asset();
         asset.getProducts().then(response => {
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
 * Exporting the asset handler.
 */
module.exports = assetHandler;