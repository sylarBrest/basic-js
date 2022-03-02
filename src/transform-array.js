const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let res = [];
  for (i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if (arr[i] === '--double-prev') {
      res.pop();
      if (i > 0) res.push(arr[i - 1]);
    }
    if (arr[i] === '--discard-prev') {
      res.pop();
      if (i > 0) res.pop();
    }
    if (arr[i] === '--double-next') {
      res.pop();
      if (i < arr.length - 1) res.push(arr[i + 1]);
    }
    if (arr[i] === '--discard-next') {
      res.pop();
      if (i < arr.length - 1) i += 2;
    }
  }
  return res;
}

module.exports = {
  transform
};
