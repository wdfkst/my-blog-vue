const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8800/',
          changeOrigin: true,
          //正则匹配所有/api的前缀 替换成空字符串
           pathRewrite: { '^/api': '' },
        },

      },
    }  
  
})
