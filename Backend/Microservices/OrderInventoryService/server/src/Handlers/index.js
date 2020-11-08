const handlerObj = {};
const constants = require("./../Helpers/constants");
const responseGenerator = require("./../Services/responseGenerator");
const attribute = require("./attribute");
const category = require("./category");
const sku = require("./sku");
const cart = require("./cart");
const asset = require("./asset");

/**
 * Method to handle the Error path requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}: The response object with the Message and the HTTP Code.
 */
handlerObj.notFound = (dataObject) => {
   return new Promise((reject) => {
      reject([constants.INVALID_PATH, constants.HTTP_NOT_FOUND_CODE]);
   });
};
/**
 * Method to handle the attribute lists.
 * @param dataObject: the request object.
 * @returns {Promise<Array>}
 */
handlerObj.attribute = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "attribute":
            promise = attribute.attribute(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the category first path requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
handlerObj.category = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "category":
            promise = category.category(dataObject);
            break;
         case "attribute":
            promise = category.attributes(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the SKU requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
handlerObj.sku = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "sku":
            promise = sku.sku(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the cart requests.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}:
 */
handlerObj.cart = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "cart":
            promise = cart.cart(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};
/**
 * Method to handle the requests for Assets.
 * @param dataObject
 * @returns {Promise<Array>}
 */
handlerObj.asset = (dataObject) => {
   return new Promise((resolve, reject) => {
      let promise;
      switch (dataObject.path) {
         case "asset":
            promise = asset.asset(dataObject);
            break;
         default:
            reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_2));
      }
      promise.then(data => {
         resolve(data);
      }).catch(err => {
         reject(err);
      });
   });
};

/**
 * Exporting the handler object.
 */
module.exports = handlerObj;