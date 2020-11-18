const constants = require("./constants");
const encrypterDecrypter = require("./encrypterDecrypter");
const Razorpay = require("razorpay");
const razorpayHelper = {};

razorpayHelper.instance = new Razorpay({
   key_id: encrypterDecrypter.decrypt(process.env[constants.RAZOR_PAY_ID]),
   key_secret: encrypterDecrypter.decrypt(process.env[constants.RAZOR_PAY_SECRET])
});

/**
 * Exporting the RazorPay helper.
 */
module.exports = razorpayHelper;