import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import IconButton from 'material-ui/IconButton'

import FaAngleLeft from 'react-icons/lib/fa/angle-left'
import FaAngleRight from 'react-icons/lib/fa/angle-right'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'


const styles = (theme) => ({
    root: {
        display: 'grid',
        gridAutoFlow: 'column',
        width: 'fit-content',
        gridArea: 'SectionXNav',
        alignSelf: 'end',
        [theme.breakpoints.up('sm')]: {
            alignSelf: 'initial',
        }
    },
})

class SectionXNav extends Component {
    render() {
        const {
            classes,
            sectionSwitchX,
            sectionXEnd,
            sectionReset,
         } = this.props
        return (
            <div className={classes.root}>
                {
                sectionXEnd ?
                <IconButton onClick={()=>sectionReset(true)} aria-label="Start">
                    <FaAngleDoubleLeft />
                </IconButton> :
                <IconButton onClick={()=>sectionSwitchX(false)} aria-label="Left">
                    <FaAngleLeft />
                </IconButton>
                }
                <IconButton onClick={()=>sectionSwitchX(true)} aria-label="Right">
                    <FaAngleRight />
                </IconButton>
            </div>
        )
    }
}

export default withStyles(styles)(SectionXNav)
