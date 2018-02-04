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
  switchTheme,
  initSectionsX,
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
     } = this.props
    const { initSectionsX } = this.props
    initSectionsX(sections.length)
    this.mouseWheelHandlerY = (e) => mouseWheelHandlerY(e, sectionSwitchY)
    this.buttonPressHandlerY = (e) => buttonPressHandlerY(e, sectionSwitchY)
    this.mouseWheelHandlerX = (e) => mouseWheelHandlerX(e, sectionSwitchX)
    this.buttonPressHandlerX = (e) => buttonPressHandlerX(e, sectionSwitchX)
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.mouseWheelHandlerY)
    window.addEventListener("keydown", this.buttonPressHandlerY)
    window.addEventListener("mousewheel", this.mouseWheelHandlerX)
    window.addEventListener("keydown", this.buttonPressHandlerX)
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.mouseWheelHandlerY)
    window.removeEventListener("keydown", this.buttonPressHandlerY)
    window.removeEventListener("mousewheel", this.mouseWheelHandlerX)
    window.removeEventListener("keydown", this.buttonPressHandlerX)
  }

  render() {
    const {
      switchTheme,
      sectionIndexY,
      sectionIndexX,
      themeType,
     } = this.props
    const SelectedSection = sections[sectionIndexY].component
    const theme = themeType === 'dark' ? themeDark : themeLight
    const SelectedSectionIndexX = sectionIndexX[sectionIndexY]
    console.log(sectionIndexX)
    return (
      <MuiThemeProvider theme={theme}>
        <RootSlave switchTheme={switchTheme} SelectedSection={SelectedSection} SelectedSectionIndexX={SelectedSectionIndexX} />
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
    switchTheme: () =>
      dispatch(switchTheme()),
    initSectionsX: (numberOfSectionsY) =>
      dispatch(initSectionsX(numberOfSectionsY)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
