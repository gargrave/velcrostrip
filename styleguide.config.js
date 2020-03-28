const path = require('path')
const pkg = require('./package.json')

module.exports = {
  components: ['src/**/*.examples.tsx'],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    [{}],
  ).parse,
  require: [path.join(__dirname, 'styleguide/styleguide.css')],
  styleguideDir: 'docs',
  title: `Velcrostrip ${pkg.version}`,
  webpackConfig: {
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.tsx?$/,
        },
        {
          loader: 'style-loader!css-loader',
          test: /\.css$/,
        },
      ],
    },
  },
}
