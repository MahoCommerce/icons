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
        const {basename} = info.path.match(/.*\/(?<basename>.*)\.svg$/).groups;
        if (root.children[0].name === 'svg') {
          root.children[0].attributes['data-id'] = basename;
        }
      }
    }
  ]
};
