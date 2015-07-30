function Converter (userOpts) {
  this.convert = require('./convert/convert');
  this.store = require('./store/store');

  this.convertRules = require('./convert/rules');
  this.filterRules = require('./convert/filter');

  require('./options/extend').call(this, userOpts);
  require('./options/compare').call(this);
}

module.exports = Converter;
