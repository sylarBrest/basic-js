const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  for (i = 0; i < matrix.length; i++)
    for (j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 0)
        for (k = i; k < matrix.length; k++)
          matrix[k][j] = 0;
  return matrix.reduce((sum, el) => sum + el.reduce((s, e) => s + e), 0);
}

module.exports = {
  getMatrixElementsSum
};
