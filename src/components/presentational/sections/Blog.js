import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'


import styles from 'configs/styles/section'

import SectionMain from 'components/presentational/SectionMain'
import SectionBody from 'components/presentational/SectionBody'
import SectionYNav from 'components/presentational/SectionYNav'
import SectionXNav from 'components/presentational/SectionXNav'

class Blog extends Component {
  render() {
    const {
      classes,
      SelectedSectionIndexX,
      sectionAnimation,
      sectionSwitchY,
      sectionSwitchX,
      sectionXEnd,
      sectionReset,
      lastAction,
     } = this.props
    return (
      <div className={classes.root}>
        {
          SelectedSectionIndexX === 0 && <SectionYNav sectionSwitchY={sectionSwitchY} />
        }
        {
          SelectedSectionIndexX === 1 ? (
            <SectionBody sectionAnimation={sectionAnimation} lastAction={lastAction}>
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
          ) : SelectedSectionIndexX === 2 ? (
            <SectionBody sectionAnimation={sectionAnimation} lastAction={lastAction}>
            <div className={classes.subSectionsContainer}>
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
          ) : (
                <SectionMain type={'Personal project'} title={'Blog'} description={'Yup it\'s a Blog'} sectionAnimation={sectionAnimation} lastAction={lastAction}/>
              )
        }
        <SectionXNav SelectedSectionIndexX={SelectedSectionIndexX} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} sectionReset={sectionReset} />
      </div>
    )
  }
}

export default withStyles(styles)(Blog)
