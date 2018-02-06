import React, { Component } from 'react'
import anime from 'animejs'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import WithAnimation from 'components/HOC/WithAnimation'

const styles = {
  root: {
    paddingLeft: '4rem',
    width: 'fit-content',
    //transform: 'scale(0)',
    // transform: 'translateY(20vh)',
  },
}

class Section extends Component {
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
      );
  }

  render() {
    const { type, title, description, classes } = this.props
    return (
      <div id='currentSection' className={classes.root}>
        <Typography variant="title">
          {type}
        </Typography>
        <Typography variant="display3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(WithAnimation(Section))
