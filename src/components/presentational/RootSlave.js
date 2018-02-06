import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'

import Header from 'components/presentational/Header'
import Footer from 'components/presentational/Footer'

const styles = {
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 6fr 1fr',
    alignItems: 'center',
  },
  main: {
    height: '100%',
    display: 'grid',
    alignItems: 'center',
  }
}

class RootSlave extends Component {
  render() {
    const {
      classes,
      SelectedSection,
      theme,
      SelectedSectionIndexX,
      switchTheme,
      sectionReset,
      sectionAnimation,
     } = this.props
    const inlineStyles = {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    }
    return (
      <div id='app' style={inlineStyles.root} className={classes.root + ' withThemeTransition'}>
        <Header switchTheme={switchTheme} sectionReset={sectionReset} />
        <main className={classes.main}>
          <SelectedSection SelectedSectionIndexX={SelectedSectionIndexX} sectionAnimation={sectionAnimation} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(RootSlave)
