var utils = require('uo-node-utils');

module.exports = function (data) {
  return data.replace(this.regexs.atSomething, function (base, selecteurs, declarations) {
    selecteurs = this.toPx(selecteurs);
    declarations = this.convert(declarations);

    if (utils.trim(declarations).length)
      this.atRules.push(selecteurs + declarations + '\n}');

    return '';
  }.bind(this));
}
