import React, { Component } from 'react';

import Link from 'helper/Link'
import Button from 'material-ui/Button';

const styles = {
  root: {
    padding: '1rem',
  },
  nav: {

  }
}

class Header extends Component {
  render() {
    return (
      <header style={styles.root}>
        <nav style={styles.nav}>
        <Button component={Link} to='/'>
          Dylan Merigaud
        </Button>
        </nav>
      </header>
    );
  }
}

export default Header;
