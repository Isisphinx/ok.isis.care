module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: 'YOUR_INTERCOM_APP_ID',
      },
    },
  ],
}
