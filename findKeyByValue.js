function findKeyByValue(object, value) {
  for (const property in object) {
    if (object[property] === value) {
      return property;
    }
  }
  return undefined;
}
module.exports = findKeyByValue;
// const assertEqual = function (actual, expected) {
//   return actual === expected
//     ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
// };

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
