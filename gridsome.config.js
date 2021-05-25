module.exports = {
  siteName: 'HyperHaxZ',
  siteUrl: 'https://hyperhaxz.com',
  titleTemplate: '%s - HyperHaxZ',
  siteDescription: 'HyperHaxZ is a software marketplace',
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96, 128, 192, 196]
    },
    touchicon: './src/apple-touch-icon.png'
  },
  chainWebpack (config) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}
