module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'rest-spread-spacing': 0,
    'max-classes-per-file': 'off',
    'react/jsx-fragments': 'off',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 1,
    'no-use-before-define': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': [0, 'skipUndeclared'],
    'react/no-access-state-in-setstate': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'react/jsx-tag-spacing': 0,
    'react/jsx-wrap-multilines': 'off',
    'lines-between-class-members': 'off',
    'no-empty': 1,
    'guard-for-in': 0,
    radix: 0,
    semi: 0, // Henning: disable semi rule
    'operator-linebreak': 0, // Henning: disable max-len rule
    'max-len': 0, // Henning: disable max-len rule
    'space-infix-ops': 0, // Henning: disable space-infix-ops rule
    'newline-per-chained-call': 0, // Henning: often it is more readable to chain
    'no-unused-expressions': 0, // Henning: disable to enable stuff like ``expect(browser.getText(modalFormCreatedAt)).to.be.defined``
    'no-multi-spaces': 0, // Henning: we want to define consts with multispaces
    'func-names': 0, // Henning: we want to use stuff like ``$('tbody tr').each(function (iRow) {`` without being destraced by our linter
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'import/first': 0,
    'import/no-absolute-path': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0, // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/extensions': 0, // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'no-underscore-dangle': 0, // http://eslint.org/docs/rules/no-underscore-dangle
    'global-require': 0,
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'linebreak-style': 0,
    'object-curly-newline': 0,
  },
}
