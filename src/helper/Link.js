import React, { Component } from 'react';
import { Link as TrueLink } from 'react-router-dom'
import { withRouter } from 'react-router'

class Link extends Component {
  render() {
    const { history, location, match, staticContext, ...userGivenProps } = this.props;
    const modifiedProps = Object.assign(
      {},
      userGivenProps,
      {
        replace: userGivenProps.replace ? true : (location.pathname === userGivenProps.to ? true : false)
      }
    )
    return (
      <TrueLink {...modifiedProps} />
    );
  }
}

export default withRouter(Link);