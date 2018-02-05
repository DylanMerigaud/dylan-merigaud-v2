import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import {
  mouseWheelHandlerY,
  buttonPressHandlerY,
  mouseWheelHandlerX,
  buttonPressHandlerX,
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
    this.mouseWheelHandlerY = (e) => mouseWheelHandlerY(e, sectionSwitchY)
    this.buttonPressHandlerY = (e) => buttonPressHandlerY(e, sectionSwitchY)
    this.mouseWheelHandlerX = (e) => mouseWheelHandlerX(e, sectionSwitchX)
    this.buttonPressHandlerX = (e) => buttonPressHandlerX(e, sectionSwitchX)
    sectionSetFromPathname(window.location.pathname)
    console.log(window.location.pathname)
    console.log(window.location.pathname.split('/').filter(elem => elem !== ''))
  }

  componentDidMount() {
    window.addEventListener("wheel", this.mouseWheelHandlerY)
    window.addEventListener("keydown", this.buttonPressHandlerY)
    window.addEventListener("wheel", this.mouseWheelHandlerX)
    window.addEventListener("keydown", this.buttonPressHandlerX)
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.mouseWheelHandlerY)
    window.removeEventListener("keydown", this.buttonPressHandlerY)
    window.removeEventListener("wheel", this.mouseWheelHandlerX)
    window.removeEventListener("keydown", this.buttonPressHandlerX)
  }

  render() {
    const {
      sectionIndexY,
      sectionIndexX,
      sectionReset,
      switchTheme,
      themeType,
     } = this.props
    const SelectedSection = sections[sectionIndexY].component
    const theme = themeType === 'dark' ? themeDark : themeLight
    const SelectedSectionIndexX = sectionIndexX[sectionIndexY]
    return (
      <MuiThemeProvider theme={theme}>
        <RootSlave switchTheme={switchTheme} sectionReset={sectionReset} SelectedSection={SelectedSection} SelectedSectionIndexX={SelectedSectionIndexX} />
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeType: state.themeType,
    sectionIndexY: state.sectionIndexY,
    sectionIndexX: state.sectionIndexX,
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
    sectionReset: () =>
      dispatch(sectionReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
