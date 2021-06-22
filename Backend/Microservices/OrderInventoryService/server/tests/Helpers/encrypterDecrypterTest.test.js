import {test} from "@jest/globals";

const encrypterDecrypter = require("./../../src/Helpers/encrypterDecrypter");
test("Should Encrypt a String", () => {
   require("dotenv").config();
   expect(encrypterDecrypter.encrypt("Hello")).toBe("59413076b7c3e5316b43bc5ed52d534d");
});
test("should Decrypt a String", () => {
   require("dotenv").config();
   expect(encrypterDecrypter.decrypt("1d054cc3d09edd8dc7d81a7937fe5998")).toBe("Hello");
});