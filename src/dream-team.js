const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const firstLetters = [];
  for (let i = 0; i < members.length; i += 1) {
    const member = members[i];
    if (typeof(member) === 'string') {
      const cleanName = member.trim();
      if (cleanName.length > 0) {
        const firstLetter = cleanName[0];
        const upLetter = firstLetter.toUpperCase();
        firstLetters.push(upLetter);
      }
    }
  }
  firstLetters.sort();
  const teamName = firstLetters.join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
