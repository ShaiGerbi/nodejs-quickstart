module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'node': true,
    'es2022': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'all', 'ignoreRestSiblings': false }],
    'no-var': ['error']
  }
}
