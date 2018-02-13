import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    position: 'absolute',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    alignItems: 'center',
    justifySelf: 'start',
    margin: '0 0 0 4rem',
    [theme.breakpoints.up('sm')]: {
      // paddingLeft: '5rem',
      // paddingRight: '5rem',
    }
  },
  title: {
    alignSelf: 'end',
  },
  body1: {
    marginTop: '1rem',
    alignSelf: 'start',
  }
})

class SectionMain extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   nextProps.animateOnComponentShouldUpdate()
  //   return true
  // }

  render() {
    const { type, title, description, classes, keySelectedSection } = this.props
    return (
      <div id={keySelectedSection} className={classes.root}>
        <Typography variant="title" className={classes.title}>
          {type}
        </Typography>
        <Typography variant="display3">
          {title}
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          {description}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(SectionMain)
