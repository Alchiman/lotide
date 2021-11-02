function countLetters(sentence) {
  const str = sentence.split(" ").join("");
  const letterCount = {};
  for (letter of str) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  return letterCount;
}
module.exports = countLetters;
// console.log(countLetters("lighthouse in the house"));
