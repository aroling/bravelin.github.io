module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  globals: {
    'hljs': true,
    'alert': true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // setting default 4 indent
    'indent': [ 'error', 4 , { 'SwitchCase' : 1 }],
    // allow async-await
    'generator-star-spacing': 0,
    // off eqeqeq
    'eqeqeq': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
