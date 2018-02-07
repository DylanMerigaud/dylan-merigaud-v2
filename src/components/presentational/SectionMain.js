import React, { Component } from 'react'
import anime from 'animejs'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import WithAnimation from 'components/HOC/WithAnimation'

const styles = theme => ({
  root: {
    paddingLeft: '2rem',
    gridArea: 'SectionMain',
    justifySelf: 'start',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '2rem',
    }
  },
  text: {
    wordBreak: 'break-word',
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
    } = nextProps

    anime(
      Object.assign(
        {
          targets: '#currentSection',
        },
        sectionAnimation
      )
    )
    return false
  }

  render() {
    const { type, title, description, classes } = this.props
    return (
      <div id='currentSection' className={classes.root + ' ' + classes.text}>
        <Typography variant="title">
          {type}
        </Typography>
        <Typography variant="display3" gutterBottom className={classes.text}>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.text}>
          {description}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(WithAnimation(SectionMain))
