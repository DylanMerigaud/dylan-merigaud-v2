import React, { Component } from 'react'
import anime from 'animejs'

import { withStyles } from 'material-ui/styles'
import WithAnimation from 'components/HOC/WithAnimation'
import { Scrollbars } from 'react-custom-scrollbars';

const styles = theme => ({
  root: {
    gridArea: 'SectionMain',
    overflow: 'hidden',
  },
  content: {
    paddingLeft: '1rem',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
    gridColumnGap: '1rem',
    gridRowGap: '1rem',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '2rem',
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
    } = nextProps
    if (!sectionAnimation) return false
    anime(
      Object.assign(
        {
          targets: '#currentSection',
        },
        sectionAnimation
      )
    )
    return false
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
      <Scrollbars id='currentSection' className={classes.root} renderThumbVertical={this.renderThumb}>
        <div className={classes.content}>
          {children}
        </div>
      </Scrollbars>
    )
  }
}

export default withStyles(styles, { withTheme: true })(WithAnimation(SectionBody))
