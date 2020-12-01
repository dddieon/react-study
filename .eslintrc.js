module.exports = {
  // prettier와 동일하게 반영
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'avoid',
  // aribnb 설정 참고(from jeonnaehyeok)
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier/react',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // prettier/react 추가
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { devDependencies: true, extensions: ['.js', '.jsx'] },
    ],
  },
};
