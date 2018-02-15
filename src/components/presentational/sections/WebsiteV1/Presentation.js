import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'

import styles from 'configs/styles/section'

import SectionBody from 'components/presentational/SectionBody'

class Presentation extends Component {
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
          Presentation
        </Typography>
        <div className={classes.subSectionsContainer}>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
              Contexte
            </Typography>
            <Typography variant="body1" component='div'>
              <List disablePadding>
                <ListItem disableGutters className={classes.ListItem}>
                  Date: Decembre 2018
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Duree: 1 mois
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Equipe: 1 personne
                </ListItem>
              </List>
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
              Descriptif
            </Typography>
            <Typography variant="body1" component='div'>
              Site web faisant office de CV. Le site regroupe ma bio, mes experiences, mes technologies et ce que je cherche.
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
            Points clés
            </Typography>
            <Typography variant="body1" component='div'>
              <List disablePadding>
                <ListItem disableGutters className={classes.ListItem}>
                  La partie authentification du Back-End
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Creation du design from sratch
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Animations via AnimeJs
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Changement de langue au runtime
                </ListItem>
              </List>
            </Typography>
          </Paper>
        </div>
      </SectionBody>
    )
  }
}

export default withStyles(styles)(Presentation)
