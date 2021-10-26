const tail = function (array) {
  return array.slice(1);
};

const assertEqual = function (actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
