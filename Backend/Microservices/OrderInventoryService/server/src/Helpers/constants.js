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
   /*'Content-Length': 40000,*/
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

constants.STATUS_PENDING = 1;
constants.STATUS_CONFIRMED = 2;
constants.STATUS_DISPATCHED = 3;
constants.STATUS_CANCEL = 4;
constants.STATUS_PAYMENT_ERROR = 5;
constants.STATUS_NOT_YET_DISPATCHED = 6;
constants.STATUS_SHIPPED = 7;
constants.STATUS_DELIVERED = 8;
constants.STATUS_IN_STOCK = 9;
constants.STATUS_SOLD = 10;
constants.STATUS_IN_TRANSIT = 11;
constants.STATUS_WARRANTY_NOT_ACTIVATED = 12;
constants.STATUS_WARRANTY_ACTIVATED = 13;
constants.STATUS_ERROR = 14;
constants.STATUS_COMPLETED = 15;
constants.STATUS_PROCESSING = 16;

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
constants.FORBIDDEN_MESSAGE = "Incorrect Token or token expired or the user doesn't have sufficient permissions.";
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
constants.IMAGES_BUCKET_BASE_URL = "http://d3lnfv74g3xcms.cloudfront.net/";

constants.MICROSERVICE_AUTH_KEY_VALUE = "api_auth";
constants.API_AUTH_KEY = "key";
constants.USER_SERVICE_PORT = 7001;
constants.USER_SERVICE_HOST = "localhost";
constants.USER_SERVICE_VALIDATE_TOKEN_PATH = "/auth/token";

/**
 * SP Names.
 */
constants.SP_CHECK_API_TOKEN = "sp_CheckApiToken";
constants.SP_LOG_API_STATUS = "sp_LogApiStatus";
constants.SP_CREATE_ATTRIBUTE = "sp_CreateAttribute";
constants.SP_CREATE_CATEGORY = "sp_CreateCategory";
constants.SP_GET_CATEGORIES = "sp_GetCategories";
constants.SP_CREATE_CATEGORY_ATTRIBUTES = "sp_CreateCategoryAttributes";
constants.SP_GET_CATEGORY_ATTRIBUTES = "sp_GetCategoryAttribute";
constants.SP_GET_ATTRIBUTE_POSSIBLE_VALUES = "sp_GetAttributePossibleValues";
constants.SP_CREATE_ATTRIBUTE_POSSIBLE_VALUES = "sp_CreateAttributePossibleValues";
constants.SP_CREATE_SKU = "sp_CreateSKU";
constants.SP_GET_SKU = "sp_GetSKUs";
constants.SP_GET_CART_DETAILS = "sp_GetCartDetails";
constants.SP_CREATE_UPDATE_CART = "sp_CreateUpdateCart";
constants.SP_CREATE_ASSET = "sp_CreateAsset";
constants.SP_GET_ASSET = "sp_GetAsset";
constants.SP_GET_PRODUCTS = "sp_GetProducts";
constants.SP_CREATE_SKU_PICTURES = "sp_CreateSKUPictures";

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
constants.ROLE_ID = "role_id";
constants.ROLE_STATUS = "role_status";

constants.ATTRIBUTES = "attributes";
constants.CATEGORIES = "categories";
constants.CATEGORY_ID = "category_id";
constants.ATTRIBUTE_ID = "attribute_id";
constants.ATTRIBUTE_VALUES = "attribute_values";
constants.ATTRIBUTE_NAME = "attribute_name";
constants.ATTRIBUTE_DEFAULT_VALUE = "default_value";
constants.ASSET_ATTRIBUTE_VALUE = "attribute_value";
constants.ATTRIBUTE_DESCRIPTION = "attribute_description";
constants.SKU = "sku";
constants.BRAND = "brand";
constants.MODEL = "model";
constants.COLOR = "color";
constants.PRODUCT_GRADE = "product_grade";
constants.STORAGE = "storage";
constants.PARENT_CATEGORY = "parent_category";
constants.QUANTITY = "quantity";
constants.SKU_IMAGE_DATA = "image_data";
constants.FILE_EXTENSION = "file_extension";
constants.SKU_IMAGE_POSITION = "position";

constants.ASSET_UNIQUE_NUMBER = "asset_unique_number";
constants.ASSET_ID = "asset_id";
constants.ASSET_CATEGORY = "category";
constants.ASSET_SUB_CATEGORY = "sub_category";
constants.ASSET_MANUFACTERER = "manufacturer";
constants.ASSET_NAME = "asset_name";
constants.ASSET_LOCATION = "location";
constants.ASSET_VENDOR_ID = "vendor_id";
constants.PROCUREMENT_PRICE = "procurement_price";
constants.BASE_PRICE = "base_price";
constants.SELLING_PRICE = "selling_price";
constants.ASSET_STATUS = "asset_status";
constants.WARRANTY_STATUS = "warranty_status";
constants.CATEGORY_NAME = "category_name";


/**
 * exporting the constants.
 */
module.exports = constants;
