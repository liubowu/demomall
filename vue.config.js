// 别名的配置
module.exports = {
  configureWebpack: {
    resolve: {
      //   extensions: [] //默认配置过了的
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        networks: "@/networks",
        router: "@/router",
        views: "@/views"
      }
    }
  }
};
