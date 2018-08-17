module.exports = {
  siteMetadata: {
    title: 'Isis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'p3uq76c1',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/icon.png",
  
        appName: 'Isis',
        appDescription: 'Isis Contact Center',
        developerName: 'Thibaut Constant',
        developerURL: null,
        dir: 'auto',
        lang: 'fr-FR',
        background: '#fafafa',
        theme_color: '#c8b48c',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
    `gatsby-plugin-offline`,
  ],
}
