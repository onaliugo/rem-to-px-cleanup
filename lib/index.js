function Converter (userOpts) {
  this.convert = require('./convert/convert');

  require('./options/extend').call(this, userOpts);
  require('./options/compare').call(this);
}

module.exports = Converter;
