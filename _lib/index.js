var Converter = function (opts) {
  this.init(opts);
};

Converter.prototype.init = require('./init');
Converter.prototype.storeatGeneral = require('./store-at-rules');
Converter.prototype.storeComments = require('./store-comments');
Converter.prototype.filter = require('./filter');
Converter.prototype.convert = require('./convert');
Converter.prototype.convertRules = require('./convert-rules');
Converter.prototype.replaceStuff = require('./replace-stuff');
Converter.prototype.toPx = require('./to-px');
Converter.prototype.createDist = require('./create-dist');

module.exports = Converter;
