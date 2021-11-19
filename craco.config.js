/* eslint-disable @typescript-eslint/no-var-requires */
const { whenProd } = require('@craco/craco');
const WebpackBar = require('webpackbar');

module.exports = {
  babel: {
    plugins: [['babel-plugin-styled-components', { pure: true, displayName: true, fileName: false }]],
  },
  webpack: {
    plugins: [new WebpackBar()],
  },
  devServer: {
    port: 3000,
    hotOnly: true
  },
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig }) => {
          delete cracoConfig.eslint;
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig }) => {
          // Remove ESLintWebpackPlugin
          webpackConfig.plugins = webpackConfig.plugins.filter(
            plugin => plugin.constructor.name !== 'ESLintWebpackPlugin',
          );

          // Remove ModuleScopePlugin
          webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
            plugin => plugin.constructor.name !== 'ModuleScopePlugin',
          );

          return webpackConfig;
        },
      },
    },
  ],
};
