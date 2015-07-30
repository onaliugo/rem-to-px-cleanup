var utils = require('uo-node-utils');

module.exports = function (data) {
  return data.replace(this._opts.regexs.mqContainer, function (content, selecteurs, declarations) {
    selecteurs = this.convertToPx(selecteurs);
    declarations = this.convertRules(declarations);

    if (!utils.trim(declarations).length)
      return '';

    return selecteurs + '\n' + declarations + '\n}';
  }.bind(this));
};
