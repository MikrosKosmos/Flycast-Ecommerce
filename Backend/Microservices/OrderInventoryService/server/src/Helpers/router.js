const handlers = require('./../Handlers');
const validator = require('validatorswithgenerators').validators;
const routes = {
   "attribute": handlers.attribute,
   "category": handlers.category,
   "sku": handlers.sku,
   "cart": handlers.cart
};

const path = {};
/**
 * Method to get the routed path.
 * @param requestPath: The Requested path.
 * @returns {boolean}: path if correct request else false.
 */
path.getPath = function (requestPath) {
   if (validator.validateUndefined(routes[requestPath])) {
      return routes[requestPath];
   }
   return handlers.notFound;
};
/**
 * Sending the path.
 */
module.exports = path;