import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    marginBottom: '1em',
  },
}

const Layout = ({ children, data, classes }) => (
  <div>
    <CssBaseline />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            {data.site.siteMetadata.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default withStyles(styles)(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
