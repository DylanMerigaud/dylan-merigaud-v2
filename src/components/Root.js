import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Blog from 'components/sections/Blog'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


console.log(theme)
const styles = {
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    alignItems: 'center',
  }
}

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={styles.root}>
          <Header />
          <Blog />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Root;
