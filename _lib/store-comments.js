var utils = require('uo-node-utils');

module.exports = function (str) {
  str = str.replace(this.regexs.singleComment, function () {

  });

  str = str.replace(this.regexs.multiComment, function (content) {

    console.log(base);

  })

  return str;
}
