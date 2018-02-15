import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    height: 'max-content',
  },
  subroot: {
    position: 'absolute',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    alignItems: 'center',
    justifySelf: 'start',
    margin: '0 3rem 0 3rem',
    [theme.breakpoints.up('sm')]: {
      // paddingLeft: '2rem',
      margin: '0 5rem 0 5rem',
    },
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
  render() {
    const { type, title, description, classes, keySelectedSection } = this.props
    return (
        <div className={classes.subroot + ' ' + keySelectedSection + ' ' + keySelectedSection + '-root'}>
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
