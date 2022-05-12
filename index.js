const alpoScriptParser = require("@tpisto/alposcript");
const path = require("path");

module.exports = function (args) {
  return {
    parserOverride(code, opts, babelParser) {
      let parsedPath = path.parse(opts.sourceFileName);
      if (parsedPath.ext == ".as") {
        return alpoScriptParser(code, opts);
      } else if (parsedPath.ext == ".asx") {
        return alpoScriptParser(code, { ...opts, ...{ isAsx: true } });
      } else {
        return babelParser(code, opts);
      }
    },
  };
};
