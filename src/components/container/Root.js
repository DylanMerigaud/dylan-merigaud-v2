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
  componentWillMount() {
    sectionSetFromPathname(window.location.pathname)
  }

  constructor(props) {
    super(props)
    const {
      sectionSwitchY,
      sectionSwitchX,
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
      lastAction,
     } = this.props
    const SelectedSectionIndexX = sectionIndexX[sectionIndexY]
    const SelectedSection = sections[sectionIndexY].components[sectionIndexX[sectionIndexY]]
    const keySelectedSection = 'currentSection-' + sectionIndexY.toString() + '-' + SelectedSectionIndexX.toString()
    const theme = themeType === 'dark' ? themeDark : themeLight
    const sectionXMaxLength = sections[sectionIndexY].components.length - 1
    const sectionXEnd = sectionXMaxLength === sectionIndexX[sectionIndexY]
    const sectionXEndOrStart = SelectedSectionIndexX === sectionXMaxLength || SelectedSectionIndexX === 0
    return (
      <MuiThemeProvider theme={theme}>
        <RootSlave sectionXEndOrStart={sectionXEndOrStart} sectionIndexY={sectionIndexY} sectionIndexX={sectionIndexX} sectionXMaxLength={sectionXMaxLength} lastSectionIndexY={lastSectionIndexY} lastSectionIndexX={lastSectionIndexX} lastMoveDirection={lastMoveDirection} keySelectedSection={keySelectedSection} lastAction={lastAction} switchTheme={switchTheme} sectionReset={sectionReset} SelectedSection={SelectedSection} SelectedSectionIndexX={SelectedSectionIndexX} sectionSwitchY={sectionSwitchY} sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} />
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
    lastAction: state.lastAction,
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
