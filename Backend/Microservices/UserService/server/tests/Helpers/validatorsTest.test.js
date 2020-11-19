const validators = require("validatorswithgenerators").validators;
test("Should validate Numbers when false", () => {
   expect(validators.validateNumber(false)).toBe(false);
});
test("Should validate Numbers when undefined", () => {
   expect(validators.validateNumber(undefined)).toBe(false);
});
test("Should validate Null in undefined check", () => {
   expect(validators.validateUndefined(null)).toBe(false);
});
test("Should validate decimal numbers", () => {
   expect(validators.validateNumber(100.23)).toBe(true);
});
test("should validate Date", () => {
   expect(validators.validateDate("2020-11-19")).toBe(true);
});