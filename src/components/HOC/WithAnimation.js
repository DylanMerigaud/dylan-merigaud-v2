import React, { Component } from 'react'

import ReactTransitionGroup from 'react-addons-transition-group'

const WithAnimation = ComponentToAnimate => class ComponentWithAnimation extends Component {
    render() {
        return (
            <ReactTransitionGroup>
                <ComponentToAnimate {...this.props} />
            </ReactTransitionGroup>
        )
    }
}

export default WithAnimation