var utils = require('uo-node-utils');

module.exports = function (css) {
  return css.replace(this.regexs.declaration, function (base, selecteurs, declarations) {

    if (selecteurs.charAt(0) === '$')
      return selecteurs.substring(0, 2);

    declarations = this.filter(declarations);
    declarations = this.toPx(declarations);

    if (!utils.trim(declarations).length)
      return '';

    return selecteurs + '\n' + declarations + '\n}';
  }.bind(this));
};
