const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = String(n);
  let maxmalNumber = 0;
  for (let i = 0; i < nStr.length; i += 1) {
    const befor = nStr.substring (0, i);
    const after = nStr.substring (i + 1);
    const newStr = befor + after;
    const newNumber = Number(newStr);
    if (newNumber > maxmalNumber) {
      maxmalNumber = newNumber;
    }
  }
  return maxmalNumber;
}

module.exports = {
  deleteDigit
};
