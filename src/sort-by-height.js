const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (i = 0; i < arr.length - 1; i++)
    for (j = i + 1; j < arr.length; j++)
      if ((arr[i] !== -1) && (arr[j] !== -1) && (arr[i] > arr[j]))
        [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

module.exports = {
  sortByHeight
};
