require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Contact Center Isis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: process.env.INTERCOM_APP_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: 'src/themes/default',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Contact Center Isis',
        short_name: 'Isis',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#c8b48c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
  ],
}
