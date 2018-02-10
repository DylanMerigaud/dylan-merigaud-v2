import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'

import Header from 'components/presentational/Header'
import Footer from 'components/presentational/Footer'

const styles = {
  root: {
    wordBreak: 'break-word',
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 6fr 1fr',
    alignItems: 'center',
  },
  main: {
    height: '100%',
    display: 'grid',
    alignItems: 'center',
    position: 'relative',
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
      sectionSwitchY,
      sectionSwitchX,
      sectionXEnd,
      lastAction,
     } = this.props
    const inlineStyles = {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    }
    return (
      <div id='app' style={inlineStyles.root} className={classes.root}>
        <Header switchTheme={switchTheme} sectionReset={sectionReset} />
        <main className={classes.main}>
          <SelectedSection lastAction={lastAction} SelectedSectionIndexX={SelectedSectionIndexX} sectionAnimation={sectionAnimation} sectionReset={sectionReset} sectionSwitchY={sectionSwitchY} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(RootSlave)
