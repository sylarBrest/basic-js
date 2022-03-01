const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  for (i = 0; i < matrix.length; i++) {
    let row = [];
    for (j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (k = ((i - 1) < 0) ? 0 : i - 1; k <= Math.min(i + 1, matrix.length - 1); k++)
        for (l = ((j - 1) < 0) ? 0 : j - 1; l <= Math.min(j + 1, matrix[i].length - 1); l++)
          if (matrix[k][l])
            if ((k !== i) || (l !== j))
              count++;
      row.push(count);
    }
    res.push(row);
  }
  return res;
}

module.exports = {
  minesweeper
};
