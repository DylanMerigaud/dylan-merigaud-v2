import React, { Component } from 'react';

import Typography from 'material-ui/Typography';

const styles = {
  root: {
    paddingLeft: '4rem'
  },
}

class WebsiteV2 extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Typography type="title">
          Personal project
        </Typography>
        <Typography type="display3" gutterBottom>
          WebsiteV2
        </Typography>
        <Typography type="body1" gutterBottom>
          Yup it's a WebsiteV2
        </Typography>
      </div>
    );
  }
}

export default WebsiteV2;