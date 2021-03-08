const path = require('path');
module.exports = {
  lintOnSave: false,
  chainWebpack:config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() //设置 icons 目录走 svg-sprite 规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract : false})
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir)//其他svg loader 排除 icons 目录
  }
}
