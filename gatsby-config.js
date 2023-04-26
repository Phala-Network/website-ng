module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: 'Phala Network'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'zh'],
        defaultLanguage: 'en',
        redirect: true
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-H3VG3RPY7M', 'G-242TN6WXZV']
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TX3VQZP'
      }
    },
    'gatsby-plugin-postcss'
  ]
}
