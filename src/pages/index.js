import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = {
  bigAvatar: {
    width: 60,
    height: 60,
  },
  myMaxWidth: {
    maxWidth: '400px',
  },
}

const IndexPage = ({ classes }) => (
  <div>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={11} className={classes.myMaxWidth}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="Isis" className={classes.bigAvatar}>
                I
              </Avatar>
            }
            title="Isis"
            subheader="September 14, 2016"
          />
          <CardContent>
            <List component="nav">
              <ListItem
                button
                onClick={() => {
                  Intercom('show')
                }}
              >
                <ListItemIcon>
                  <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Chat"
                  secondary="Essayez ça en premier ;-)"
                />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button component="a" href="tel:+33755536633">
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="07 55 53 66 33" />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="SMS"
                    component="a"
                    href="sms:+33755536633"
                  >
                    <MessageIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button component="a" href="mailto:ok@isis.care">
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="ok@isis.care" />
              </ListItem>
              <ListItem
                button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/xqZPLa28KxB2"
              >
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="body1" color="textSecondary">
                        386 avenue de Dunkerque
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        59130 Lambersart - France
                      </Typography>
                      </React.Fragment>
                  }
                  primary={'Isisphinx'}
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(IndexPage)
