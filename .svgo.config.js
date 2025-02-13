module.exports = {
  js2svg: {
    pretty: false
  },
  plugins: [
    "removeComments",
    "removeDoctype",
    "removeXMLProcInst",
    {
      name: 'addFilenameAttribute',
      fn(root, _params, info) {
        const path = require('path');
        const basename = path.basename(info.path, '.svg');
        const folder = path.basename(path.dirname(info.path));

        if (root.children[0].name === 'svg') {
          root.children[0].attributes['data-name'] = basename;
          root.children[0].attributes['data-variant'] = folder;
        }
      }
    }
  ]
};
