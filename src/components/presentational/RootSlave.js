import React, { Component } from 'react'

import withStyles from 'material-ui/styles/withStyles'

import Header from 'components/presentational/Header'
import Footer from 'components/presentational/Footer'

import SectionYNav from 'components/presentational/SectionYNav'
import SectionXNav from 'components/presentational/SectionXNav'

import { TransitionGroup } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'

import {
  getSectionAnimation,
} from 'helpers/sectionHelper'

import {
  SECTION_SWITCH_X,
} from 'actions/Root'

import anime from 'animejs'

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
  },
  ReactTransitionGroup: {
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
  },
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
      sectionSwitchY,
      sectionSwitchX,
      sectionXEnd,
      lastAction,
      keySelectedSection,
      lastMoveDirection,
      sectionXMaxLength,
      lastSectionIndexX,
    } = this.props
    const inlineStyles = {
      root: {
        backgroundColor: theme.palette.background.default,
      },
    }

    console.log('xday', this.props.lastMoveDirection, lastMoveDirection)
    const isAnError = (
      (SelectedSectionIndexX === sectionXMaxLength && this.props.lastMoveDirection === 'right' && lastSectionIndexX === SelectedSectionIndexX) ||
      (SelectedSectionIndexX === 0 && this.props.lastMoveDirection === 'left' && lastSectionIndexX === SelectedSectionIndexX)
    )
      && lastAction === SECTION_SWITCH_X
    if (isAnError) {
      console.log('FDSFDS')
      anime(
        Object.assign(
          {
            targets: '#' + keySelectedSection,
          },
          getSectionAnimation(lastMoveDirection, isAnError)
        )
      )
    }
    return (
      <div id='app' style={inlineStyles.root} className={classes.root}>
        <Header switchTheme={switchTheme} sectionReset={sectionReset} />
        <main className={classes.main}>
          {SelectedSectionIndexX === 0 && <SectionYNav sectionSwitchY={sectionSwitchY} />}
          <TransitionGroup className={classes.ReactTransitionGroup}>
            <Transition
              key={keySelectedSection}
              timeout={1250}
              onEntering={() => {
                anime(
                  Object.assign(
                    { targets: '#' + keySelectedSection, },
                    getSectionAnimation(this.props.lastMoveDirection, false, 'onEntering')
                  )
                )
              }}
              onExiting={() => {
                anime(
                  Object.assign(
                    { targets: '#' + keySelectedSection, },
                    getSectionAnimation(this.props.lastMoveDirection, false, 'onExiting')
                  )
                )
              }}
            >
              <SelectedSection keySelectedSection={keySelectedSection} lastAction={lastAction} SelectedSectionIndexX={SelectedSectionIndexX} sectionReset={sectionReset} sectionSwitchY={sectionSwitchY} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} />
            </Transition>
          </TransitionGroup>
          <SectionXNav SelectedSectionIndexX={SelectedSectionIndexX} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} sectionReset={sectionReset} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(RootSlave)
