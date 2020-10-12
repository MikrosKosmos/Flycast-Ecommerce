const Cache = require('./../../src/Helpers/cacheHelper');
require('dotenv').config();
test("should store a data in cache", () => {
   const cache = new Cache();
   cache.storeData("test", "data").then((reply) => {
      expect(reply).toBe(true);
   }).catch(err => {
      console.error(err);
   });
});
test("should retrieve data from cache", () => {
   const cache = new Cache();
   cache.getData("test").then(data => {
      console.log(data);
      expect(data).toBe("data");
   }).catch(err => {
      console.error(err);
   });
});