const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let res = arr.filter((el) => Array.isArray(el));
    return res.length != 0 ? 1 + this.calculateDepth([].concat(...res)) : 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
