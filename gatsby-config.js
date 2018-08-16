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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Isis',
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
