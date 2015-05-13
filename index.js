var Utils = require('uo-node-utils');

module.exports = function (userOpts) {
  Utils.silent = userOpts.silent || false;

  console.log(Utils.read.file(userOpts.cssFile));

  console.log(userOpts);
};
