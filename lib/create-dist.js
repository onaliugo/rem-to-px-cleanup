var utils = require('uo-node-utils');

module.exports = function (css) {
  var distName = this.opts.src.replace('.css', '-ie.css');
  utils.create.file(distName, css);
}
