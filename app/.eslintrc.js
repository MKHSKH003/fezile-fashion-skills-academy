module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  rules: {
    'comma-dangle': 0,
    indent: ['error', 4, {
      SwitchCase: 1
    }],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'eol-last': 0,
    'max-len': ['error', 180],
    'linebreak-style': ['error', 'windows'],
    'react/forbid-prop-types': [0],
    'no-mixed-underscore-dangle': [0],
    'global-require': [0],
    'no-mixed-operators': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'no-underscore-dangle': [0],
    'jsx-a11y/label-has-for': [0]
  }
};
