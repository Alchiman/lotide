const head = function (array) {
  if (array === []) {
    return undefined;
  }
  return array[0];
};

const assertEqual = function (actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["LightHouse"]), "Hello");
assertEqual(head([]), "Hello");
