import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import styles from 'configs/styles/sections'

import SectionMain from 'components/presentational/SectionMain'
import SectionYNav from 'components/presentational/SectionYNav'
import SectionXNav from 'components/presentational/SectionXNav'


class Blog extends Component {
  render() {
    const {
      classes,
      SelectedSectionIndexX,
      sectionAnimation,
      sectionSwitchY,
      sectionSwitchX,
      sectionXEnd,
      sectionReset,
     } = this.props
    return (
      <div className={classes.root}>
        <SectionYNav sectionSwitchY={sectionSwitchY} />
        {
          SelectedSectionIndexX === 1 ? (
            <div>
              1
            </div>
          ) : SelectedSectionIndexX === 2 ? (
            <div>
              2
            </div>
          ) : (
                <SectionMain type={'Personal project'} title={'Blog'} description={'Yup it\'s a Blog'} sectionAnimation={sectionAnimation} />
              )
        }
        <SectionXNav sectionSwitchX={sectionSwitchX} sectionXEnd={sectionXEnd} sectionReset={sectionReset} />
      </div>
    )
  }
}

export default withStyles(styles)(Blog)
