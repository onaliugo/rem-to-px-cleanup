module.exports = function (data) {
  return data.replace(this._opts.regexs.rem, function (base, remValue) {
    return parseFloat(remValue * this.opts.baseFontSize) + 'px';
  }.bind(this));
};
