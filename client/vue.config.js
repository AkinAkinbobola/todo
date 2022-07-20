const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({
  outputDir: path.resolve(__dirname, "../server/public"),
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
        },
      },
    },
  },
})
