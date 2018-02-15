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
                  Date: Janvier 2018
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Duree: 1 mois
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Equipe: 2 personne
                </ListItem>
              </List>
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography className={classes.paperTitle} variant="display1" component='h2' gutterBottom>
              Descriptif
            </Typography>
            <Typography variant="body1" component='div'>
              Plateforme permettant aux utilisateurs de creer, surprimer et modifier leurs posts.
              Ils peuvent egalement liker et commenter les autres posts.
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
                  Mis en place de la restriction d'interaction des utilisateurs non autorises
                </ListItem>
                <ListItem disableGutters className={classes.ListItem}>
                  Gestion d'erreur du serveur
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
