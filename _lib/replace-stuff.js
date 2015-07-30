module.exports = function (str) {
  this.stuffToReplace.arr.forEach(function (rule, i) {
    str = str.replace('$' + rule.id, rule.content);
  });

  return str;
}
