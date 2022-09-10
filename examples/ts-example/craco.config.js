// 提前配置 dotenv，否则在此文件中将访问不到自定义的环境变量
require('dotenv').config()

const { whenProd, when } = require('@craco/craco')
const path = require('path')
const CracoAntDesignPlugin = require('craco-antd')
const { DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./config')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    plugins: [
      ...whenProd(
        () => [new AntdDayjsWebpackPlugin({ replaceMoment: true })],
        []
      ),
      ...when(
        process.env.SCRIPT_TYPE === 'analyze',
        () => [new BundleAnalyzerPlugin()],
        []
      ),
      new DefinePlugin(config),
    ],
    configure(webpackConfig) {
      webpackConfig.plugins.map((plugin) => {
        whenProd(() => {
          if (plugin instanceof MiniCssExtractPlugin) {
            Object.assign(plugin.options, {
              ignoreOrder: true,
            })
          }
        })
        return plugin
      })

      return webpackConfig
    },
  },

  style: {
    sass: {
      loaderOptions: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },

  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#556ee6',
          '@success-color': '#34c38f',
          '@warning-color': '#f1b44c',
          '@error-color': '#f46a6a',
          '@info-color': '#50a5f1',
          '@processing-color': '#6485ff',
          '@text-color': '#495057',
          '@border-radius-base': '6px',
          '@btn-border-radius-base': '5px',
          '@btn-border-radius-sm': '4px',
          '@font-family':
            'Rubik, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica, Arial, sans-serif',
        },
      },
    },
  ],
}
