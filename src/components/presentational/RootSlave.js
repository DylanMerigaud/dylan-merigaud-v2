import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'

import Header from 'components/presentational/Header'
import Footer from 'components/presentational/Footer'

const styles = {
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 5fr 1fr',
    alignItems: 'center',
  },
}

class RootSlave extends Component {
  render() {
    const { classes, SelectedSection, theme, SelectedSectionIndexX } = this.props
    const inlineStyles = {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    }
    return (
      <div style={inlineStyles.root} className={classes.root + ' withThemeTransition'}>
        <Header switchTheme={this.props.switchTheme}/>
        <SelectedSection SelectedSectionIndexX={SelectedSectionIndexX}/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(RootSlave)
