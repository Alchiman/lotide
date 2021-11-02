const letterPositions = function (sentence) {
  // const str = sentence.split(" ").join("");
  // console.log(str);
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]] = [i];
    } else if (results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
  }
  // logic to update results here
  return results;
};
module.exports = letterPositions;
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

// assertArraysEqual(letterPositions("hello").e, [1]);
