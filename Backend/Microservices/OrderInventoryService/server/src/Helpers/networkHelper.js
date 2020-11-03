const constants = require('./constants');
const printer = require('./printer');
const generator = require("validatorswithgenerators").generators;
const validators = require("validatorswithgenerators").validators;
const http = require('http');
const StringDecoder = require('string_decoder').StringDecoder;

class NetworkHelper {
   /**
    * _hostName
    * _path
    * _method
    * _queryParams
    * _body
    * _headers
    * _port
    * @param hostName
    * @param path
    * @param method
    * @param queryParams
    * @param body
    * @param headers
    * @param port
    */
   constructor(hostName, path, method, queryParams, body, headers, port) {
      this._hostName = validators.validateString(hostName) ? hostName : false;
      this._path = validators.validateString(path) ? path : false;
      this._method = validators.validateString(method) ? method : false;
      this._queryParams = validators.validateArray(queryParams) ? queryParams : false;
      this._body = validators.validateUndefined(body) ? body : false;
      this._headers = validators.validateUndefined(headers) ? headers : false;
      this._port = validators.validateNumber(port) ? port : 80;
   }

   /**
    * Method to generate the query string params for a URL.
    * @param url: The base url.
    * @param params: The array containing the parameters to be added as key and value.
    * @returns {}: Returns the string URL with the params appended, else null.
    */
   _generateQueryURL(url, params) {
      try {
         url = url.replace("?", "");
         if (params.length > 0) {
            const queryParams = new URLSearchParams();
            params.forEach(oneParam => {
               const key = Object.keys(oneParam)[0];
               const value = oneParam[key];
               queryParams.append(key, value);
            });
            let stringUrl = url;
            stringUrl = stringUrl.concat("?");
            let urlParams = queryParams.toString();
            return stringUrl + urlParams;
         } else
            return url;
      } catch (e) {
         return url;
      }
   };

   /**
    * Method to make a HTTP request.
    * @returns {Promise<JSON>}: The response or the error.
    */
   request() {
      const decoder = new StringDecoder('utf-8');
      return new Promise((resolve, reject) => {
         this._path = this._generateQueryURL(this._path, this._queryParams);
         const requestOptions = {
            protocol: "http:",
            hostname: this._hostName,
            method: this._method,
            path: this._path,
            port: this._port,
            headers: this._headers
         };
         let responseBody = "";
         const request = http.request(requestOptions, res => {
            res.on('data', (data) => {
               responseBody += decoder.write(data);
            }).on('end', () => {
               responseBody += decoder.end();
               responseBody = generator.generateParsedJSON(responseBody);
               resolve(responseBody);
            });
         }).on("error", (err) => {
            printer.printError(err);
            reject(err);
         });
         if (this._method === constants.HTTP_POST || this._method === constants.HTTP_PUT) {
            request.write(JSON.stringify(this._body));
         }
         request.end();
      });
   }
}

/**
 * Exporting the class.
 */
module.exports = NetworkHelper;