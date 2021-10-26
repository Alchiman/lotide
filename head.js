const head = function (array) {
  if (array === []) {
    return undefined;
  }
  return array[0];
};

const assertEqual = function (head, expected) {
  return head === expected
    ? console.log(`✅✅✅ Assertion Passed: ${head} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion failed: ${head} !== ${expected}`);
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["LightHouse"]), "Hello");
assertEqual(head([]), "Hello");
