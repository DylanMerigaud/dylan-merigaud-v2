import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import Typography from 'material-ui/Typography'

const styles = {
  root: {
    padding: '1rem',
    alignSelf: 'end',
  },
  madeWithLove: {
    textAlign: 'right',
    wordBreak: 'break-word',
  }
}

class Footer extends Component {
  render() {
    const { classes } = this.props
    return (
      <footer className={classes.root}>
        <Typography className={classes.madeWithLove} variant="body1">
          Made with <span role='img' aria-label='♥'>❤️️</span> by Dylan Merigaud
        </Typography>
      </footer>
    )
  }
}

export default withStyles(styles)(Footer)
