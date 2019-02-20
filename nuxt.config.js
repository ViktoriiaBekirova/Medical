module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Medical',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },
  css: [
     {src: '~assets/scss/app.scss', lang: 'scss'},
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
        require('postcss-inline-svg')(),
        require('autoprefixer')({
            browsers: ['last 10 versions', 'ie >= 11']
        })
    ]
  },
  vendor: ['components', 'vee-validate'],
  plugins: [
     '~plugins/components.js',
     {src: '~plugins/vee-validate', ssr: false},
     {src: '~plugins/animated-number', ssr: false}
  ],
}

