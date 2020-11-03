const generator = require('./../../src/Services/generator');
test("Should generate correct difference between 2 dates", () => {
   expect(generator.generateDateDifference("2020-03-25", "2020-03-25")).toBe(0);
});
test("should Generate Ahead date correctly", () => {
   expect(generator.generateAheadDate(1)).toBe("2020-05-16");
});
test("should Generate Ahead time correctly", () => {
   expect(generator.generateAheadTime(1)).toBe("");
});
test("Should generate current time", () => {
   expect(generator.generateCurrentTime()).toBe("");
});