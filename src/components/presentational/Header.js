import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import Link from 'helpers/Link'
import Button from 'material-ui/Button'

const styles = {
  root: {
    padding: '1rem',
    alignSelf: 'start',
  },
  nav: {

  }
}

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <header className={classes.root}>
        <nav className={classes.nav}>
        <Button onClick={this.props.switchTheme} component={Link} to='/'>
          Dylan Merigaud
        </Button>
        </nav>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
