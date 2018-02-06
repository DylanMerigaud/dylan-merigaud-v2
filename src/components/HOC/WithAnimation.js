import React, { Component } from 'react'

import ReactTransitionGroup from 'react-addons-transition-group'

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

const WithAnimation = ComponentToAnimate => class ComponentWithAnimation extends Component {
    render() {
        return (
            <ReactTransitionGroup component={FirstChild}>
                <ComponentToAnimate {...this.props} />
            </ReactTransitionGroup>
        )
    }
}

export default WithAnimation