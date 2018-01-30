import React, { Component } from 'react';

import Typography from 'material-ui/Typography';

const styles = {
  root: {
    padding: '1rem',
  },
  madeWithLove: {
    textAlign: 'right',
  }
}

class Footer extends Component {
  render() {
    return (
      <footer style={styles.root}>
      <Typography style={styles.madeWithLove} type="body1">
          Made with ❤️️ by Dylan Merigaud
        </Typography>
      </footer>
    );
  }
}

export default Footer;
