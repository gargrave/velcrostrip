import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.browser,
        format: 'umd',
        globals: { react: 'react' },
        name: 'tsModuleStarter',
      },
    ],
    external: [
      '@babel/runtime/helpers/typeof',
      'react',
      'object-assign',
      'prop-types/checkPropTypes',
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs({
        namedExports: { react: ['createElement'] },
      }),
      babel({
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        runtimeHelpers: true,
      }),
    ],
  },
]
