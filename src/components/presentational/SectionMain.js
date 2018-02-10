import React, { Component } from 'react'
import anime from 'animejs'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import WithAnimation from 'components/HOC/WithAnimation'
import {
  SECTION_SWITCH_Y,
  SECTION_SWITCH_X,
} from 'actions/Root'

const styles = theme => ({
  root: {
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
  componentDidAppear() {
    const {
      sectionAnimation,
    } = this.props
    if (sectionAnimation)
      anime(
        Object.assign(
          {
            targets: '#currentSection',
          },
          sectionAnimation
        )
      )
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      sectionAnimation,
      lastAction,
    } = nextProps
    if (!sectionAnimation || (lastAction !== SECTION_SWITCH_Y && lastAction !== SECTION_SWITCH_X)) return true
    anime(
      Object.assign(
        {
          targets: '#currentSection',
        },
        sectionAnimation
      )
    )
    return true
  }

  render() {
    const { type, title, description, classes } = this.props
    return (
      <div id='currentSection' className={classes.root}>
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

export default withStyles(styles)(WithAnimation(SectionMain))
