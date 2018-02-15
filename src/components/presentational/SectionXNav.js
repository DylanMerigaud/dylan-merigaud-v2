import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'

import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'


const styles = (theme) => ({
  root: {
    top: '50%',
    right: '0%',
    transform: 'translateY(-50%)',
    position: 'absolute',
    display: 'grid',
    // gridTemplateAreas: '\'left right\'',
    gridTemplateAreas: '\'left\' \'right\'',
    gridAutoRows: '3rem',
    [theme.breakpoints.up('sm')]: {
      gridAutoColumns: '3rem',
      gridTemplateAreas: '\'left right\'',
    },
  },
  left: {
    gridArea: 'left',
  },
  right: {
    gridArea: 'right',
  },
})

class SectionXNav extends Component {
  render() {
    const {
      classes,
      sectionSwitchX,
      sectionXEnd,
      sectionReset,
      SelectedSectionIndexX,
    } = this.props
    return (
      <div className={classes.root}>
        {
          SelectedSectionIndexX !== 0 &&
          <IconButton onClick={() => sectionSwitchX(false)} aria-label="Left" className={classes.left}>
            <FaAngleLeft />
          </IconButton>
        }
        {
          !sectionXEnd ? <IconButton onClick={() => sectionSwitchX(true)} aria-label="Right" className={classes.right}>
            <FaAngleRight />
          </IconButton> :
            <IconButton onClick={() => sectionReset(true)} aria-label="Start" className={classes.right}>
              <FaAngleDoubleLeft />
            </IconButton>
        }
      </div>
    )
  }
}

export default withStyles(styles)(SectionXNav)
