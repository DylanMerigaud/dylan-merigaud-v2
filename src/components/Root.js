import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {
  mouseWheelHandlerVertical,
  buttonPressHandlerVertical,
  verticalSectionGetNewValue,
} from 'helper/sectionHelper'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Blog from 'components/sections/Blog'
import WebsiteV1 from 'components/sections/WebsiteV1'
import WebsiteV2 from 'components/sections/WebsiteV2'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const styles = {
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    gridTemplateRows: '1fr 5fr 1fr',
    alignItems: 'center',
  }
}

const sections = [
  Blog,
  WebsiteV1,
  WebsiteV2
]

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionIndex: 0
    }
    this.verticalSectionHandler = this.verticalSectionHandler.bind(this)
    this.mouseWheelHandlerVertical = (e) => mouseWheelHandlerVertical(e, this.verticalSectionHandler)
    this.buttonPressHandlerVertical = (e) => buttonPressHandlerVertical(e, this.verticalSectionHandler)
  }

  componentDidMount() {
    window.addEventListener("mousewheel", this.mouseWheelHandlerVertical);
    window.addEventListener("keydown", this.buttonPressHandlerVertical);
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.mouseWheelHandlerVertical);
    window.removeEventListener("keydown", this.buttonPressHandlerVertical);
  }

  verticalSectionHandler(e, up) {
    const { sectionIndex } = this.state
    this.setState({ sectionIndex: verticalSectionGetNewValue(up, sectionIndex, sections) })
  }

  render() {
    const { sectionIndex } = this.state
    const SelectedSection = sections[sectionIndex]
    return (
      <MuiThemeProvider theme={theme}>
        <div style={styles.root}>
          <Header />
          <SelectedSection />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Root;
