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
constants.STATUS_PAYMENT_CAPTURED = 1;
constants.STATUS_PAYMENT_REJECTED = 2;
constants.STATUS_PAYMENT_AUTHORIZED = 3;
constants.STATUS_PAYMENT_FAILED = 4;
constants.STATUS_ERROR = 5;
constants.STATUS_COMPLETED = 6;
constants.STATUS_PROCESSING = 7;

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

constants.SQS_ORDER_TO_PAYMENT_QUEUE_URL = "https://sqs.ap-south-1.amazonaws.com/076796648158/order_to_payment.fifo";
constants.SQS_PAYMENT_TO_ORDER_QUEUE_URL = "https://sqs.ap-south-1.amazonaws.com/076796648158/payment_to_order.fifo";
constants.SQS_MESSAGE_BODY = "MessageBody";
constants.SQS_BODY = "Body";
constants.SQS_QUEUE_URL = "QueueUrl";
constants.SQS_MESSAGE_GROUP_ID = "MessageGroupId";
constants.SQS_DEDUPLICATION_ID = "MessageDeduplicationId";
constants.SQS_MAX_NUMBER_OF_MESSAGE = "MaxNumberOfMessages";
constants.SQS_RECEIPT_HANDLE = "ReceiptHandle";

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
constants.SP_CREATE_ORDER_PAYMENT = "sp_CreateOrderPayment";
constants.SP_UPDATE_PAYMENT_STATUS = "sp_UpdatePaymentStatus";
constants.SP_GET_PAYMENT_DETAILS = "sp_GetPaymentDetails";

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

constants.COUPON_CODE = "coupon_code";
constants.CATEGORY_ID = "category_id";
constants.GROSS_AMOUNT = "gross_amount";
constants.TAX_AMOUNT = "tax_amount";
constants.DICOUNT_AMOUNT = "discount_amount";
constants.PARENT_CATEGORY = "parent_category";
constants.QUANTITY = "quantity";
constants.SKU_IMAGE_DATA = "image_data";
constants.FILE_EXTENSION = "file_extension";
constants.SKU_IMAGE_POSITION = "position";

constants.BASE_PRICE = "base_price";
constants.CATEGORY_NAME = "category_name";
constants.RATING = "rating";

constants.ORDER_ID = "order_id";
constants.TRANSACTION_ID = "transaction_id";
constants.BASE_AMOUNT = "base_amount";
constants.PAYMENT_ID = "payment_id";
constants.IS_PAYMENT_CONFIRMED = "is_payment_confirmed";

/**
 * exporting the constants.
 */
module.exports = constants;
