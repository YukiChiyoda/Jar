const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: true,
  parallel: false,
})
