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
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let count = str[i];
   
    if (result[count] != undefined) {
      ++result[count]
    } else {
      result[count] = 1;
    }
  }
  for(let key in result) {
  	result.push(key + result[key])
  }
  return result.join('')
}


module.exports = {
  encodeLine
};
