var utils = require('uo-node-utils');

module.exports = function (data) {
  return data.replace(this._opts.regexs.css, function (content, selecteurs, declarations, i) {
    if (content.charAt(0) === '$')
      return content;

    declarations = this.filterRules(declarations);
    declarations = this.convertToPx(declarations);

    if (!utils.trim(declarations).length) {
      return '';
    }

    return selecteurs + '\n' + declarations + '\n}\n';
  }.bind(this));
};
