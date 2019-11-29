// const path = require('path');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: name => `${name}/style/less`
    }, 'vant']
  ],
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('webView', path.resolve(__dirname, './src'))
  // },
}
