import React, { Component } from 'react'

import { withStyles } from 'material-ui/styles'
import { Scrollbars } from 'react-custom-scrollbars'

const styles = theme => ({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    // gridArea: 'SectionMain',
  },
  content: {
    display: 'grid',
    justifyItems: 'center',
    gridAutoFlow: 'row',
    margin: '0 4.5rem 0 4rem',
    [theme.breakpoints.up('sm')]: {
      // paddingLeft: '2rem',
    },
  },
})

class SectionBody extends Component {
  constructor(props) {
    super(props)
    this.renderThumb = this.renderThumb.bind(this)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   nextProps.animateOnComponentShouldUpdate()
  //   return true
  // }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: this.props.theme.palette.background.paper,
      cursor: 'pointer',
      borderRadius: 'inherit',
    }
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }

  render() {
    const { classes, children, keySelectedSection } = this.props
    return (
      <div className={classes.root}>
      <Scrollbars renderThumbVertical={this.renderThumb}>
        <div className={classes.content} id={keySelectedSection}>
          {children}
        </div>
      </Scrollbars>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SectionBody)
