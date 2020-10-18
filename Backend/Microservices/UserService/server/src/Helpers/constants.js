const constants = {};
constants.SYSTEM_USER_ID = 1;
/**
 * Color Constants.
 * @type {string}
 */
constants.COLOR_RED = "\x1b[31m";
constants.COLOR_GREEN = "\x1b[32m";

/**
 * Logging File Details.
 */
constants.LOG_FILE_NAME = "flycast_ecommerce-logs.logs";

/**
 * Date Format.
 */
constants.DATE_FORMAT = "YYYY-MM-DD";
constants.DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
constants.TIME_ZONE = "Asia/Kolkata";

/**
 * Validation strings.
 */
constants.EMAIL_REGEX = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
   + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
constants.PASSWORD_REGEX = "(?=^.{6,16}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])" +
   "(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?&gt;.&lt;,])(?!.*\\s).*$";
constants.PHONE_NUMBER_PREFIX = "+91";
constants.DATE_REGEX = "[0-9]{4}-[0-9]{2}-[0-9]{2}";

/**
 * Header Data.
 */
constants.HEADERS = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, PUT, DELETE',
   'Access-Control-Max-Age': 2592000,
   'Content-Length': 4194304,
   'Access-Control-Allow-Headers': 'Content-Type,access-control-allow-origin,X-Requested-With,key,jw_token,Content-Length'
};
constants.CONTENT_TYPE_TEXT = "Content-Type";
constants.CONTENT_TYPE_JSON = "application/json";

/**
 * Constants for Role Details.
 */
constants.ROLE_ADMIN = "Admin";
constants.ROLE_ADMIN_ID = 1;
constants.ROLE_EMPLOYEE = "Employee";
constants.ROLE_EMPLOYEE_ID = 2;
constants.ROLE_VENDOR = "Vendor";
constants.ROLE_VENDOR_ID = 3;
constants.ROLE_CUSTOMER = "Customer";
constants.ROLE_CUSTOMER_ID = 4;

/**
 * Request Keys.
 */
constants.API_TOKEN_KEY = "key";
constants.API_REQUEST_KEY = "request_Key";
constants.REQUEST_TYPE = "type";
/**
 * Status Values
 */

constants.STATUS_CONFIRM = 1;
constants.STATUS_VERIFIED = 2;
constants.STATUS_PENDING = 3;
constants.STATUS_CANCEL = 4;
constants.STATUS_REJECTED = 5;
constants.STATUS_SUSPENDED = 6;
constants.STATUS_ERROR = 7;
constants.STATUS_COMPLETED = 8;
constants.STATUS_PROCESSING = 9;

/**
 * API Methods.
 */
constants.HTTP_POST = "post";
constants.HTTP_GET = "get";
constants.HTTP_PUT = "put";
constants.HTTP_OPTIONS = "options";

/**
 * Response Codes and messages.
 */
constants.BAD_REQUEST_CODE = 400;
constants.HTTP_NOT_FOUND_CODE = 404;
constants.FORBIDDEN_REQUEST_CODE = 403;
constants.INTERNAL_SERVER_ERROR_CODE = 500;
constants.HTTP_SUCCESS = 200;
constants.HTTP_ACCEPTED_OKAY = 201;
constants.HTTP_UNAUTHORIZED_CODE = 401;

constants.RESPONSE_KEY = "res";
constants.ERROR_MESSAGE = "Error";
constants.USER_DATA = "user_data";
constants.JW_TOKEN = "jw_token";
constants.BAD_REQUEST_MESSAGE = "Incorrect Request";
constants.FORBIDDEN_MESSAGE = "Incorrect Token or token expired.";
constants.INSUFFICIENT_DATA_MESSAGE = "Insufficient Data";
constants.INVALID_METHOD_MESSAGE = "Invalid Method";
constants.INVALID_PATH = "Invalid Path";
constants.INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";
constants.RESPONSE_KEY_ERROR = "error";
constants.RESPONSE_SUCESS_LEVEL_1 = "1";
constants.RESPONSE_SUCCESS_LEVEL_2 = "2";
constants.ERROR_LEVEL_KEY = "error_level";
constants.ERROR_LEVEL_1 = "1";
constants.ERROR_LEVEL_2 = "2";
constants.ERROR_LEVEL_3 = "3";
constants.ERROR_LEVEL_4 = "4";

/**
 * Messages.
 */
constants.WELCOME_MESSAGE = "Welcome to USER MICROSERVICE.";
constants.OTP_MESSAGE = "Your Flycast OTP is :";

/**
 * General Keys
 */
constants.RAZOR_PAY_ID = "key_id";
constants.RAZOR_PAY_SECRET = "key_secret";
constants.AWS_KEY_ID = "accessKeyId";
constants.AWS_SECRET_KEY = "secretAccessKey";
constants.TWO_FACTOR_KEY = "2F";
constants.S3_BUCKET_KEY = "Bucket";
constants.S3_KEY_KEY = "Key";
constants.S3_BODY_KEY = "Body";
constants.ENV_DEVELOPMENT = "DEVELOPMENT";
constants.ENV_PRODUCTION = "PRODUCTION";
constants.ENV_KEY = "ENV";
constants.ENCRYPTION_KEY_KEY = "ENCRYPTED_KEY";
constants.DB_HOST_KEY = "DB_HOST";
constants.DB_PASSWORD_KEY = "DB_PASSWORD";
constants.ROLES = "roles";
constants.AWS_DOCUMENTS_BUCKET = "flycast-documents";
constants.AWS_IMAGES_BUCKET = "flycast-images";
constants.DOUCMENTS_BUCKET_BASE_URL = "https://flycast-documents.s3.ap-south-1.amazonaws.com/";
constants.IMAGES_BUCKET_BASE_URL = "https://flycast-images.s3.ap-south-1.amazonaws.com/";

/**
 * SP Names.
 */
constants.SP_CHECK_API_TOKEN = "sp_CheckApiToken";
constants.SP_LOG_API_STATUS = "sp_LogApiStatus";
constants.SP_REGISTER_USER = "sp_RegisterUser";
constants.SP_VALIDATE_OR_CREATE_OTP = "sp_ValidateOrCreateOTP";
constants.SP_UPDATE_USER_DETAILS = "sp_UpdateUserDetails";
constants.SP_INSERT_UPDATE_ADDRESS = "sp_InsertUpdateUserAddress";
constants.SP_GET_USER_ADDRESS = "sp_GetUserAddress";
constants.SP_VALIDATE_LOGIN = "sp_ValidateLogin";
constants.SP_INSERT_DOCUMENT_DETAILS = "sp_InsertDocumentDetails";
/**
 * Column Names
 */
constants.COLUMN_CREATED_BY = "created_by";
constants.COLUMN_CREATED = "created";
constants.COLUMN_MODIFIED_BY = "modified_by";
constants.COLUMN_MODIFIED = "modified";
constants.EMPLOYEE_ID = "employee_id";
constants.ID = "id";
constants.IS_VALID = "isValid";

constants.FIRST_NAME = "first_name";
constants.LAST_NAME = "last_name";
constants.GENDER = "gender";
constants.EMAIL = "email";
constants.PHONE_NUMBER = "phone_number";
constants.EXTRA_DATA = "extra_data";
constants.USED_REFERRAL_CODE = "used_referral_code";
constants.REFERRAL_CODE = "referral_code";
constants.ROLE_ID = "role_id";
constants.ROLE_NAME = "role_name";
constants.ROLE_STATUS = "role_status";
constants.STATUS_NAME = "status_name";
constants.OTP = "otp";
constants.PASSWORD = "password";

constants.USER_ID = "user_id";
constants.ADDRESS_ID = "address_id";
constants.CONTACT_PERSON_NAME = "contact_person_name";
constants.CONTACT_PHONE_NUMBER = "contact_phone_number";
constants.ADDRESS_1 = "address_1";
constants.ADDRESS_2 = "address_2";
constants.CITY_ID = "city_id";
constants.PINCODE = "pincode";
constants.GPS_LAT = "gps_lat";
constants.GPS_LONG = "gps_long";
constants.ADDRESS_TYPE = "address_type";
constants.DELIVERY_INSTRUCTION = "delivery_instructions";
constants.IS_DEFAULT = "is_default";

/**
 * exporting the constants.
 */
module.exports = constants;
