module.exports = function (str) {
  return str.replace(this.regexs.remValue, function (base, remValue) {
    return parseFloat(remValue * this.opts.baseFontSize) + 'px';
  }.bind(this));
};
