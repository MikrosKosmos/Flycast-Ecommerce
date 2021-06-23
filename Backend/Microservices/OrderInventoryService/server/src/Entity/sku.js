const constants = require("./../Helpers/constants");
const database = require("./../Services/databaseService");
const validators = require("validatorswithgenerators").validators;
const generator = require("validatorswithgenerators").generators;
const printer = require("./../Helpers/printer");
const utils = require("./../Helpers/utils");
const s3Helper = require("./../Helpers/s3Helper");

class SKU {
   /**
    *
    * @param brand
    * @param model
    * @param color
    * @param grade
    * @param storage
    * @param parentCategory
    * @param sku
    */
   constructor(brand, model, color, grade, storage, parentCategory, sku) {
      this._brand = validators.validateString(brand) ? brand : false;
      this._model = validators.validateString(model) ? model : false;
      this._color = validators.validateString(color) ? color : false;
      this._grade = validators.validateString(grade) ? grade : false;
      this._storage = validators.validateString(storage) ? storage : false;
      this._parentCategory = validators.validateNumber(parentCategory) ? parentCategory : false;
      this._sku = validators.validateString(sku) ? sku : false;
   }

   /**
    * Method to create the SKU.
    * @param jwToken: The token of the vendor user.
    * @param skuImageData: The Base 64 image data.
    * @param fileExtension: The extension of the image.
    * @param position: The image position.
    * @returns {Promise<Array>}:
    */
   createSku(jwToken, skuImageData, fileExtension, position) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               const fileName = generator.generateRandomToken(16) + "." + fileExtension;
               const imageUrl = constants.IMAGES_BUCKET_BASE_URL + fileName;
               let promisesArray = [];
               promisesArray.push(s3Helper.uploadFile(skuImageData, fileName, false));
               promisesArray.push(database.runSp(constants.SP_CREATE_SKU, [this._brand, this._model, this._color,
                  this._grade, this._storage, this._parentCategory, imageUrl,
                  validators.validateNumber(position) ? position : 0,
                  userData[constants.ID]]));
               Promise.all(promisesArray).then(_resultSet => {
                  const dbResult = _resultSet[1][0][0];
                  const imageResult = _resultSet[0];
                  if (validators.validateUndefined(dbResult) && imageResult) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, dbResult]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to get the SKU.
    * @returns {Promise<Array>}:
    */
   getSku() {
      return new Promise(async (resolve, reject) => {
         database.runSp(constants.SP_GET_SKU, [this._sku, this._brand, this._model]).then(_resultSet => {
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
    * Method to create the SKU pictures.
    * @param imageData: The image data.
    * @param fileExtension: The file extension.
    * @param position: The position.
    * @param jwToken: The token of the user.
    * @returns {Promise<Array>}:
    */
   createSkuPictures(imageData, fileExtension, position, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0 &&
               utils.checkWhetherRoleExists(userData[constants.ROLES], constants.ROLE_VENDOR_ID)) {
               const fileName = generator.generateRandomToken(16) + "." + fileExtension;
               const imageUrl = constants.IMAGES_BUCKET_BASE_URL + fileName;
               let promiseArray = [];
               promiseArray.push(s3Helper.uploadFile(imageData, fileName, false));
               promiseArray.push(database.runSp(constants.SP_CREATE_SKU_PICTURES, [this._sku,
                  imageUrl, position, userData[constants.ID]]));
               Promise.all(promiseArray).then(results => {
                  const dbResult = results[1][0][0];
                  if (dbResult[constants.ID] > 0 && validators.validateUndefined(results[1])) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: 1, url: imageUrl}]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (err) {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }

   /**
    * Method to get the SKU pictures.
    * @returns {Promise<unknown>}
    */
   getSKUPictures() {
      return new Promise((resolve, reject) => {
         database.runSp(constants.SP_GET_SKU_PICTURES, [this._sku]).then(_resultSet => {
            resolve([constants.RESPONSE_SUCESS_LEVEL_1, _resultSet[0]]);
         }).catch(err => {
            printer.printError(err);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         });
      });
   }

   /**
    * Method to update the sku ratings by a customer.
    * @param rating: The rating of the customer.
    * @param jwToken: The jw token of the customer.
    * @returns {Promise<Array>}:
    */
   updateSKURating(rating, jwToken) {
      return new Promise(async (resolve, reject) => {
         try {
            const userData = await utils.validateUserToken(jwToken);
            if (validators.validateUndefined(userData) && userData[constants.ID] > 0) {
               database.runSp(constants.SP_CREATE_SKU_RATINGS, [this._sku, rating, userData[constants.ID]]).then(_resultSet => {
                  const result = _resultSet[0][0];
                  if (validators.validateUndefined(result) && result[constants.ID] > 0) {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, result]);
                  } else {
                     resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
                  }
               }).catch(err => {
                  printer.printError(err);
                  reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
               });
            } else {
               reject([constants.ERROR_LEVEL_4, constants.FORBIDDEN_MESSAGE]);
            }
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the SKUs.
 */
module.exports = SKU;