const without = function (source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let n = 0; n < itemsToRemove.length; n++) {
      if (source[i] !== itemsToRemove[n]) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};
module.exports = without;
// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   }
//   if (!eqArrays(array1, array2)) {
//     console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
//   }
// };

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
