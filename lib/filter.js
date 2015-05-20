module.exports = function (declarations) {
  var arr = declarations.split('\n');

  arr = arr.filter(function (entry) {
    return entry.length && entry.indexOf('rem') !== -1;
  });

  return arr.join('\n');
};
