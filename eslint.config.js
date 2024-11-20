const { FlatCompat } = require('@eslint/eslintrc')
const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

const compat = new FlatCompat()

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    ignores: [
      'src/components/base/BasePopover.vue',
      'pages.json',
      'manifest.json',
      '*.nvue',
      'dist',
    ],
  },
  unocss.configs.flat,
  {
    rules: {
      'no-debugger': require('node:process').env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': 'off',
      'no-async-promise-executor': 'off',
      'vue/multiline-html-element-content-newline': ['warn', {
        ignores: ['pre', 'textarea', 'text'],
      }],
      'vue/singleline-html-element-content-newline': ['warn', {
        ignores: ['pre', 'textarea', 'text'],
      }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/prop-name-casing': 'off',
    },
  },
  ...compat.config({
    globals: {
      // uniapp
      uni: 'readonly',
      // 支付宝小程序
      my: 'readonly',
      // 微信小程序
      wx: 'readonly',
      // H5+
      plus: 'readonly',
      // 头条小程序
      tt: 'readonly',
      // 快手小程序
      ks: 'readonly',
      // 百度小程序
      swan: 'readonly',
      // 支付宝小程序插件
      requirePlugin: 'readonly',
      // 微信 h5 sdk
      WeixinJSBridge: 'readonly',
    },
    extends: [
      './.eslintrc-auto-import.json',
    ],
  }),
)
