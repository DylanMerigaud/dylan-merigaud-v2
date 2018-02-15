import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'

import styles from 'configs/styles/section'

import SectionBody from 'components/presentational/SectionBody'

class Stack extends Component {
  render() {
    const {
      classes,
      sectionAnimation,
      lastAction,
      keySelectedSection,
      animateOnComponentShouldUpdate,
    } = this.props
    return (
      <SectionBody animateOnComponentShouldUpdate={animateOnComponentShouldUpdate} keySelectedSection={keySelectedSection} sectionAnimation={sectionAnimation} lastAction={lastAction}>
        <Typography variant="display2" gutterBottom>
          Technologies
        </Typography>
        <div className={classes.subSectionsContainer}>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
              Back-End
            </Typography>
            <Typography variant="body1" component='div'>
              <List disablePadding>
                <ListItem disableGutters className={classes.ListItem}>
                  Node.Js
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Express.js
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Passport (Google+ | Facebook | LinkedIn | Twitter | Local)
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  JWT
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Mongoose
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Bcrypt
                </ListItem>
              </List>
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
              Divers
            </Typography>
            <Typography variant="body1" component='div'>
              <List disablePadding>
                <ListItem disableGutters className={classes.ListItem}>
                  Tests: Jest
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Gestion du projet: GitHub
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Déploiement: Heroku
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Base de donnee: MongoDB (mLab)
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  CLI: ESLint | Babel
                </ListItem>
              </List>
            </Typography>
          </Paper>
        </div>
      </SectionBody>
    )
  }
}

export default withStyles(styles)(Stack)
