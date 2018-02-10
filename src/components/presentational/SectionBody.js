import React, { Component } from 'react'
import anime from 'animejs'

import { withStyles } from 'material-ui/styles'
import WithAnimation from 'components/HOC/WithAnimation'
import { Scrollbars } from 'react-custom-scrollbars'
import {
  SECTION_SWITCH_Y,
  SECTION_SWITCH_X,
} from 'actions/Root'

const styles = theme => ({
  root: {
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

  componentDidAppear() {
    const {
      sectionAnimation,
    } = this.props
    if (sectionAnimation)
      anime(
        Object.assign(
          {
            targets: '#currentSection',
          },
          sectionAnimation
        )
      )
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      sectionAnimation,
      lastAction,
    } = nextProps
    if (!sectionAnimation || (lastAction !== SECTION_SWITCH_Y && lastAction !== SECTION_SWITCH_X)) return true
    anime(
      Object.assign(
        {
          targets: '#currentSection',
        },
        sectionAnimation
      )
    )
    return true
  }

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
    const { classes, children } = this.props
    return (
      <Scrollbars className={classes.root} renderThumbVertical={this.renderThumb}>
        <div className={classes.content} id='currentSection'>
          {children}
        </div>
      </Scrollbars>
    )
  }
}

export default withStyles(styles, { withTheme: true })(WithAnimation(SectionBody))
