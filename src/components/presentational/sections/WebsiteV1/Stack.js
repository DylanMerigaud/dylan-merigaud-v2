import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'


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
        <div className={classes.subSectionsContainer}>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>

          <Paper className={classes.paper}>
            <Typography variant="display1" gutterBottom>
              Front-End
                </Typography>
            <Typography variant="body1" gutterBottom>
              react
                </Typography>
          </Paper>
        </div>
      </SectionBody>
    )
  }
}

export default withStyles(styles)(Stack)
