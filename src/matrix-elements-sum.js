const { NotImplementedError } = require('../lib');

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
  let totalSum = 0;
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const hauntedColumns = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const currentValue = matrix[i][j];
      if (hauntedColumns.includes(j)) {
        continue;
      }
      if (currentValue === 0) {
        hauntedColumns.push(j);
        } else {
          totalSum += currentValue;
      }
    }
  }
  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
