const utilsHandler = {};
const constants = require("./constants");
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
 * Exporting the util handler.
 */
module.exports = utilsHandler;