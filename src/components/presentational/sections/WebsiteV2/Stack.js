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
              Front-End
            </Typography>
            <Typography variant="body1" component='div'>
              <List disablePadding>
                <ListItem disableGutters className={classes.ListItem}>
                React.Js (react-scripts)
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                Anime.Js
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                react-router (V4)
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
                  Gestion du projet: GitHub
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Déploiement: Heroku
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Base de donnee: MongoDB (mLab)
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  CLI: ESLint
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
