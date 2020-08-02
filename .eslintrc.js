module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    // semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['src/views/*.jsx', 'src/views/**/*.jsx'],
      plugins: ['react'],
      env: {
        browser: true,
      },
    },
    {
      files: 'public/js/*.js',
      env: { browser: true },
    },
  ],
};
