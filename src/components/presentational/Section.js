import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    paddingLeft: '4rem',
    // transform: 'translateY(20vh)',
  },
}

class Blog extends Component {

  render() {
    const { type, title, description, classes } = this.props
    return (
      <div className={classes.root}>
        <Typography type="title">
          {type}
        </Typography>
        <Typography type="display3" gutterBottom>
          {title}
        </Typography>
        <Typography type="body1" gutterBottom>
          {description}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Blog)