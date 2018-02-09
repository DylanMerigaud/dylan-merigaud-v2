import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'

import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'


const styles = (theme) => ({
    root: {
        display: 'grid',
        gridTemplateAreas: '\'left right\'',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
        width: 'fit-content',
        gridArea: 'SectionXNav',
        alignSelf: 'start',
        [theme.breakpoints.up('sm')]: {
            alignSelf: 'initial',
        }
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
                    SelectedSectionIndexX !== 0 && (sectionXEnd ?
                        <IconButton onClick={() => sectionReset(true)} aria-label="Start" className={classes.left}>
                            <FaAngleDoubleLeft />
                        </IconButton> :
                        <IconButton onClick={() => sectionSwitchX(false)} aria-label="Left" className={classes.left}>
                            <FaAngleLeft />
                        </IconButton>
                    )
                }
                {
                    !sectionXEnd && <IconButton onClick={() => sectionSwitchX(true)} aria-label="Right" className={classes.right}>
                        <FaAngleRight />
                    </IconButton>
                }
            </div>
        )
    }
}

export default withStyles(styles)(SectionXNav)
