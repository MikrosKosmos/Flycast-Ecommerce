const Vendor = require('./../../src/Entity/vendor');
require('dotenv').config();
test("Should return from cache if valid", () => {
   const vendor = new Vendor(1);
   vendor.getVendor().then(data => {
      console.table(data);
      expect(data).toBeInstanceOf(Object);
   }).catch(err => {
      console.error(err);
   });
});