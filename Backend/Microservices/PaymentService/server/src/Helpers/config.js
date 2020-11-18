const config = {};
const constants = require('./constants');
config.port = 7003;
/**
 * data base configurations.
 */
config.databasePort = 3306;
config.databaseUserName = "flycast";
config.databaseName = "payment_service";

/**
 * Encryption constants
 */
config.ENCRYPT_ALGO = "aes256";
config.ENCRYPT_ENCODING = "hex";

/**
 * exporting the Config.
 */
module.exports = config;