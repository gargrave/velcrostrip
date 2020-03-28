const path = require('path')
const pkg = require('./package.json')

module.exports = {
  components: ['src/**/*.examples.tsx'],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [{}],
  ).parse,
  require: [
    path.join(__dirname, 'styleguide/normalize.css'),
    path.join(__dirname, 'styleguide/reset.css'),
    path.join(__dirname, 'styleguide/styleguide.css'),
  ],
  styleguideDir: 'docs',
  title: `Velcrostrip ${pkg.version}`,
  webpackConfig: require('./styleguide/webpack.config.js'),
}
