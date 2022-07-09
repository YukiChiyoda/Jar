const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  assetsDir: 'static',
  publicPath: '/',
  transpileDependencies: true,
  parallel: false,
})
