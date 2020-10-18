const constants = require("./../Helpers/constants");
const generator = require("validatorswithgenerators").generators;
const validators = require("validatorswithgenerators").validators;
const database = require("./../Services/databaseService");
const printer = require("./../Helpers/printer");
const s3Helper = require("./../Helpers/s3Helper");

class Documents {
   /**
    *
    * @param userId
    * @param documentId
    * @param documentType
    */
   constructor(userId, documentId, documentType) {
      this._userId = validators.validateNumber(userId) ? userId : false;
      this._documentId = validators.validateNumber(documentId) ? documentId : false;
      this._documentType = validators.validateString(documentType) ? documentType : false;
   }

   /**
    * Method to upload the document for the vendor.
    * @param fileData: The file data to be uploaded.
    * @param extension: The file extension.
    * @returns {Promise<Array>}:
    */
   createDocument(fileData, extension) {
      return new Promise(async (resolve, reject) => {
         try {
            extension = extension.startsWith(".") ? extension.substr(1, extension.length) : extension;
            const fileName = generator.generateRandomToken(16) + "." + extension;
            const fileUrl = constants.DOUCMENTS_BUCKET_BASE_URL + fileName;
            await s3Helper.uploadFile(fileData, fileName, true);
            database.runSp(constants.SP_INSERT_DOCUMENT_DETAILS,
               [this._userId, this._documentType, this._documentId, fileUrl]).then(_resultSet => {
               const result = _resultSet[0][0];
               if (validators.validateUndefined(result) && result.id > -1) {
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
               } else {
                  printer.printError(_resultSet.toString());
                  resolve([constants.RESPONSE_SUCESS_LEVEL_1, {id: -1}]);
               }
            }).catch(err => {
               printer.printError(err);
               reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
            });
         } catch (e) {
            printer.printError(e);
            reject([constants.ERROR_LEVEL_3, constants.ERROR_MESSAGE]);
         }
      });
   }
}

/**
 * Exporting the documents.
 */
module.exports = Documents;