import React, { Component } from 'react';

import Typography from 'material-ui/Typography';

const styles = {
  root: {
    paddingLeft: '4rem'
  },
}

class Blog extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Typography type="title">
          Personal project
        </Typography>
        <Typography type="display3" gutterBottom>
          Blog
        </Typography>
        <Typography type="body1" gutterBottom>
          Yup it's a blog
        </Typography>
      </div>
    );
  }
}

export default Blog;
