import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import {
  mouseWheelHandlerY,
  buttonPressHandlerY,
  mouseWheelHandlerX,
  buttonPressHandlerX,
  touchStartHandler,
  touchMoveHandler,
  touchEndHandler,
  getSectionAnimation,
} from 'helpers/sectionHelper'
import { connect } from 'react-redux'
import {
  sectionSwitchY,
  sectionSwitchX,
  sectionSetFromPathname,
  sectionReset,
  switchTheme,
} from 'actions/Root'

import sections from 'configs/sections'

import RootSlave from 'components/presentational/RootSlave'

const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const themeLight = createMuiTheme({
  palette: {
    type: 'light',
  },
})

class Root extends Component {
  constructor(props) {
    super(props)
    const {
      sectionSwitchY,
      sectionSwitchX,
      sectionSetFromPathname,
     } = this.props

    this.eventObjectSwitchSection = {
      canSwitchSection: true,
      switchSectionTimeout: undefined,
    }

    this.mouseWheelHandlerY = (e) => mouseWheelHandlerY(e, sectionSwitchY, this.eventObjectSwitchSection)
    this.buttonPressHandlerY = (e) => buttonPressHandlerY(e, sectionSwitchY)
    this.mouseWheelHandlerX = (e) => mouseWheelHandlerX(e, sectionSwitchX, this.eventObjectSwitchSection)
    this.buttonPressHandlerX = (e) => buttonPressHandlerX(e, sectionSwitchX)

    this.touchStartHandler = (e) => touchStartHandler(e)
    this.touchMoveHandler = (e) => touchMoveHandler(e)
    this.touchEndHandler = (e) => touchEndHandler(e, sectionSwitchY, sectionSwitchX)

    sectionSetFromPathname(window.location.pathname)
  }

  componentDidMount() {
    const backgroundElement = document.getElementsByTagName('main')[0]

    window.addEventListener("wheel", this.mouseWheelHandlerY)
    window.addEventListener("keydown", this.buttonPressHandlerY)
    window.addEventListener("wheel", this.mouseWheelHandlerX)
    window.addEventListener("keydown", this.buttonPressHandlerX)

    backgroundElement.addEventListener("touchstart", this.touchStartHandler)
    window.addEventListener("touchmove", this.touchMoveHandler)
    window.addEventListener("touchend", this.touchEndHandler)
  }

  componentWillUnmount() {
    const backgroundElement = document.getElementsByTagName('main')[0]

    window.removeEventListener("wheel", this.mouseWheelHandlerY)
    window.removeEventListener("keydown", this.buttonPressHandlerY)
    window.removeEventListener("wheel", this.mouseWheelHandlerX)
    window.removeEventListener("touchend", this.buttonPressHandlerX)

    backgroundElement.removeEventListener("touchstart", this.touchStartHandler)
    window.removeEventListener("touchmove", this.touchMoveHandler)
    window.removeEventListener("touchend", this.touchEndHandler)

    clearTimeout(this.eventObjectSwitchSection.switchSectionTimeout)
  }

  render() {
    const {
      sectionIndexY,
      sectionIndexX,
      lastMoveDirection,
      lastSectionIndexY,
      lastSectionIndexX,
      sectionSwitchY,
      sectionSwitchX,
      sectionReset,
      switchTheme,
      themeType,
     } = this.props
     console.log(lastMoveDirection)
    const SelectedSection = sections[sectionIndexY].component
    const theme = themeType === 'dark' ? themeDark : themeLight
    const SelectedSectionIndexX = sectionIndexX[sectionIndexY]
    const sectionXMaxLength = sections[sectionIndexY].length - 1
    const sectionXEnd = sectionXMaxLength === sectionIndexX[sectionIndexY]
    const sectionAnimation = getSectionAnimation(sectionIndexY, sectionIndexX, lastMoveDirection, sectionXMaxLength, lastSectionIndexY, lastSectionIndexX)
    return (
      <MuiThemeProvider theme={theme}>
        <RootSlave switchTheme={switchTheme} sectionReset={sectionReset} SelectedSection={SelectedSection} SelectedSectionIndexX={SelectedSectionIndexX} sectionAnimation={sectionAnimation} sectionSwitchY={sectionSwitchY} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} />
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeType: state.themeType,
    sectionIndexY: state.sectionIndexY,
    sectionIndexX: state.sectionIndexX,
    lastMoveDirection: state.lastMoveDirection,
    lastSectionIndexY: state.lastSectionIndexY,
    lastSectionIndexX: state.lastSectionIndexX,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sectionSwitchY: (up) =>
      dispatch(sectionSwitchY(up)),
    sectionSwitchX: (up) =>
      dispatch(sectionSwitchX(up)),
    sectionSetFromPathname: (pathname) =>
      dispatch(sectionSetFromPathname(pathname)),
    switchTheme: () =>
      dispatch(switchTheme()),
    sectionReset: (onlyX) =>
      dispatch(sectionReset(onlyX)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
