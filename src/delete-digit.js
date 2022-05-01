const { NotImplementedError } = require('../extensions/index.js');

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
  const splits = String(n).split('').map(Number);

  return Math.max(...splits.map((el, i) => {
    const remove = splits.slice();
    remove.splice(i, 1)
    return Number(remove.join(''))
  }))
}

module.exports = {
  deleteDigit
};
