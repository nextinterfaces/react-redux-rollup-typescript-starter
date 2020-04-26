import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import html from '@rollup/plugin-html'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import json from '@rollup/plugin-json'

const isProd = process.env.NODE_ENV === 'production'
const extensions = ['.js', '.ts', '.tsx']

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/index.js',
    format: 'iife',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    resolve({
      extensions,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
          'node_modules/react-dom/index.js': ['unstable_batchedUpdates', 'render'],
          'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer'],
          'node_modules/react/index.js': [
            'Children'
            , 'Component'
            , 'Fragment'
            , 'Profiler'
            , 'PureComponent'
            , 'StrictMode'
            , 'Suspense'
            , 'cloneElement'
            , 'createContext'
            , 'createElement'
            , 'createFactory'
            , 'createRef'
            , 'forwardRef'
            , 'isValidElement'
            , 'lazy'
            , 'memo'
            , 'useCallback'
            , 'useContext'
            , 'useDebugValue'
            , 'useEffect'
            , 'useImperativeHandle'
            , 'useLayoutEffect'
            , 'useMemo'
            , 'useReducer'
            , 'useRef'
            , 'useState'
            , 'version'
        ]
      }
    }),
    json({
      compact: true
    }),
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: [
        'react-require',
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-proposal-object-rest-spread', {
          useBuiltIns: true,
        }],
        ['@babel/plugin-transform-runtime', {
          corejs: 3,
          helpers: true,
          regenerator: true,
          useESModules: false,
        }],

        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
      ],
    }),
    html({
      fileName: 'index.html',
      title: 'React Redux TypeScript Rollup',
      template: ({ title }) => {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="/index.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="icon" type="image/png" href="data:image/pngbase64,iVBORw0KGgo=">
</head>
<body>
  <div id="app"></div>
  <script src="/index.js"></script>
</body>
</html>
`
      },
    }),
    scss({
      output: 'public/index.css',
    }),
    (isProd && terser()),
    (!isProd && serve({
      host: 'localhost',
      port: 3000,
      open: true,
      contentBase: ['public'],
    })),
    (!isProd && livereload({
      watch: 'public',
    })),
  ],
}
