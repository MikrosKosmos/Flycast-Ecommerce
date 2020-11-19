const utilsHandler = {};
const constants = require("./constants");
const generator = require("validatorswithgenerators").generators;
const tokenValidator = require("./tokenValidator");
/**
 * Method to check whether the user has permission for particular role.
 * @param roleId: The role id to check for.
 * @param userRoles: The array of roles for the user.
 * @returns {boolean}: true, if the role exists, else false.
 */
utilsHandler.checkWhetherRoleExists = (userRoles, roleId) => {
   for (let i = 0; i < userRoles.length; i++) {
      const oneRole = userRoles[i];
      //1 for user service is confirmed status.
      if (oneRole[constants.ROLE_ID] === roleId && oneRole[constants.ROLE_STATUS] === 1)
         return true;
   }
   return false;
};
/**
 * Method to validate the user token.
 * @param userToken: The token to be validated.
 * @returns {Promise<Object>}: the user data.
 */
utilsHandler.validateUserToken = (userToken) => {
   return new Promise((resolve, reject) => {
      tokenValidator.validateToken(userToken).then(userData => {
         resolve(userData);
      }).catch(err => {
         resolve(false);
      });
   });
};
/**
 * Method to generate the Flycast Order Number.
 * @param orderDate: The order date.
 * @param addressId: The address id.
 * @param userId: The user id who is placing the order.
 * @param amount: The amount of the order.
 * @returns {string}: The Flycast Order Id.
 */
utilsHandler.generateOrderId = (orderDate, addressId, userId, amount) => {
   return "FC-" + orderDate + "-00" + addressId + "-00" + userId + "-00" + amount + "-" + generator.generateRandomNumber(4);
};
/**
 * Exporting the util handler.
 */
module.exports = utilsHandler;