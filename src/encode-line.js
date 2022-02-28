const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (i = 0; i < str.length; i++) {
      let char = str[i], count = 1;
      while (str[i + 1] === char[0]) {
          count++;
          i++;
      }
      res += `${(count === 1) ? '' : count}${char}`;
  }
  return res;
}

module.exports = {
  encodeLine
};
