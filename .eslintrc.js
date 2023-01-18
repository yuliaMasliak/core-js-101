module.exports = {
  /*eslint linebreak-style: ["error", "unix"]*/
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 0,
    // 'no-restricted-globals': ['error', 'event', 'fdescribe'],
  },
};
/*eslint linebreak-style: ["error", "unix"]*/
