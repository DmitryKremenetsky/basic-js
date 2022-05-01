const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let getDomain = email.substring(email.indexOf('@') + 1)
  
  if (email.length === 36) {
  	getDomain = email.substring(email.indexOf('@') + 14)
  } else {
    getDomain = email.substring(email.indexOf('@') + 1)
  }
  return getDomain
}

module.exports = {
  getEmailDomain
};
