const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const counts = {};
  const result = [];
  for (const originalName of names) {
    let newName = originalName;
    let k = counts[originalName] || 0;
    if (k > 0) {
      let foundUnique = false;
      while (!foundUnique) {
        let potentialName = originalName + `(${k})`;
        if (counts[potentialName] === undefined) {
          newName = potentialName;
          foundUnique = true;
        } else {
          k += 1;
        }
      }
    }
    result.push(newName);
    counts[newName] = (counts[newName] || 0) + 1;
    counts[originalName] = k + 1;
  }
  return result;
}

module.exports = {
  renameFiles
};
