function Converter (userOpts) {
  this.convert = require('./convert/convert');
  this.store = require('./store/store');

  require('./options/extend').call(this, userOpts);
  require('./options/compare').call(this);
}

module.exports = Converter;
