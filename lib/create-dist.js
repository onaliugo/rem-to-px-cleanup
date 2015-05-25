var utils = require('uo-node-utils');

module.exports = function () {
  var distName = this.opts.src.replace('.css', '-ie.css');
  utils.create.file(distName, this.data);
}
