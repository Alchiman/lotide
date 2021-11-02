// const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const tail = require("../tail");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

describe("#tail", () => {
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});
