const findKey = function (object, callback) {
  for (const key in object) {
    // console.log(object[key]["stars"]);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
// const assertEqual = function (actual, expected) {
//   return actual === expected
//     ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// const findKey = function (object, callback) {
//   let foundKey;
//   for (const key in object) {
//     // console.log(object[key]["stars"]);
//     if (callback(object[key])) {
//       foundKey = key;
//       break;
//     }
//   }
//   return console.log(foundKey);
// };

// findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 10
// ); // => "noma"

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 10
//   ),
//   "noma"
// );

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 10
//   ),
//   undefined
// );

// assertEqual(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   ),
//   "noma"
// );
