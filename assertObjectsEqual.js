const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  return eqObjects(actual, expected)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};
module.exports = assertObjectsEqual;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // assertEqual(eqObjects(cd, cd2), false); // => false

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);
