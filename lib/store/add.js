var utils = require('uo-node-utils');

function adder (data, regex, store) {
  return data.replace(regex, function (content) {
    var index = store.index + 1;

    store.arr.push({
      id: index,
      content: content
    });

    store.index++;

    return '$' + index;
  });
}

module.exports = function (data, regex) {
  var store = this;

  if (utils.tools.isArray(regex))
    regex.forEach(function (r) {
      data = adder(data, r, store);
    });

  data = adder(data, regex, store);

  return data;
};
