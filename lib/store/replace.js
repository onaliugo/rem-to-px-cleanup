module.exports = function (data) {
  var size = this.arr.length;

  for (var i = 0; i < size; i++) {
    data = data.replace(new RegExp('[$]' + (i + 1) + '\\s'), function (content) {
      return rule[i].content;
    });
  }

  return data;
};
