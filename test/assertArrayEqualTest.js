assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 4, 3], [1, 2, 3]); // => false
// const assert = require("chai").assert;
// describe("#asserArrayEqual", () => {
//   it("return [1, 2, 3] ", () => {
//     assert.strictEqual([1, 2, 3], [1, 2, 3]);
//   });
//   it("return ['1', '2', '3']", () => {
//     assert.strictEqual(["1", "2", "3"], ["1", "2", "3"]);
//   });
// });
