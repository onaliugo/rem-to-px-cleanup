function Converter (userOpts) {
  require('./options/extend').call(this, userOpts);
  require('./options/compare').call(this);

  console.log(this.opts);
  console.log(this._opts);
}

module.exports = Converter;
