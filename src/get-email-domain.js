const { NotImplementedError } = require('../lib');

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
  const lastAtIndex = email.lastIndexOf('@');
  const startIndex = lastAtIndex + 1;
  const domain = email.slice(startIndex);
  return domain;
}

module.exports = {
  getEmailDomain
};
