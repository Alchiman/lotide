const assertEqual = function (actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

function countLetters(sentence) {
  const letterCount = {};
  for (letter of sentence) {
    letterCount[letter] = lette;
    console.log(letter);
  }
  console.log(letterCount);
}

countLetters("Lighthouse Lab");
