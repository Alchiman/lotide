const middle = function (array) {
  const middleItems = [];
  if (array.length <= 2) {
    return middleItems;
  }
  if (array.length % 2 === 0) {
    middleItems.push(array[array.length / 2 - 1], array[array.length / 2]);
    return middleItems;
  }
  if (array.length % 2 !== 0) {
    middleItems.push(array[Math.trunc(array.length / 2)]);
    return middleItems;
  }
};

module.exports = middle;
