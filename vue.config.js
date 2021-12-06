module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://web.juhe.cn/',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
}
