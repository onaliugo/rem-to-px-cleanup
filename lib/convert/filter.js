var utils = require('uo-node-utils');

module.exports = function (rules) {
  var arr = rules.split('\n');

  arr = arr.filter(function (entry) {
    var hasREM = entry.indexOf('rem') !== -1;
    var isEmpty = utils.trim(entry).length;

    return isEmpty && hasREM;
  });

  return arr.join('\n');
};
