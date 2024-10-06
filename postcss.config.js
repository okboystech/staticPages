module.exports = {
  plugins: {
    tailwindcss: {},

    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*', '!border*'],
      selectorBlackList: [/^:root$/, /^html$/],
    },
  },
};
