var utils = require('uo-node-utils');

module.exports = function (data) {
  return data.replace(this.regexs.atSomething, function (base, selecteurs, declarations) {
    selecteurs = this.toPx(selecteurs);
    declarations = this.convertRules(declarations);

    if (!utils.trim(declarations).length)
      return '';
  }.bind(this));
}
