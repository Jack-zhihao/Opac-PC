module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: false,
  productionSourceMap: false,
  devServer: {
    open: process.platform === "darwin",
    disableHostCheck: false,
    host: "0.0.0.0",
    port: 8081,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      "/api": {
        // 43测试环境
        target: "http://192.168.1.87:8082",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      '/foo': {
          target: '<other_url>'
      }
    }
  },
  pluginOptions: {}
};
