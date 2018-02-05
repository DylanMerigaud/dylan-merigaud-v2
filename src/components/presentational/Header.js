import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'

import FaGithub from 'react-icons/lib/fa/github'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'

const styles = theme => ({
  root: {
    alignSelf: 'start',
  },
  container: {
    display: 'grid',
    gridAutoColumns: 'max-content',
    gridAutoRows: 'max-content',
    gridTemplateColumns: 'auto 1fr',
    margin: '1rem',
    gridTemplateAreas: '\'homeButton themeButton\' \'contactButtons contactButtons\'',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'auto 1fr auto',
      justifyItems: 'initial',
      gridTemplateAreas: '\'homeButton contactButtons themeButton\'',
    }
  },
  homeButton: {
    gridArea: 'homeButton',
  },
  themeButton: {
    gridArea: 'themeButton',
    justifySelf: 'end',
  },
  contactButtons: {
    gridArea: 'contactButtons',
  },
})

class Header extends Component {
  render() {
    const { 
      classes,
      sectionReset,
     } = this.props
    return (
      <header className={classes.root}>
        <div className={classes.container}>
          <Button className={classes.homeButton} onClick={()=>sectionReset()}>
            Dylan Merigaud
          </Button>
          <div className={classes.contactButtons}>
          <IconButton href='https://github.com/dylanleking' aria-label="GitHub">
            <FaGithub/>
          </IconButton>
          <IconButton href='https://www.malt.fr/profile/dylanmerigaud' aria-label="Malt">
            <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 92.3 92.3">
              <path d="M79 14.2c-4.6-4.5-12-4.5-16.4 0L13.4 62.8C9 67.3 9 74.6 13.4 79c4.4 4.5 11.7 4.5 16.2 0l49-48.6c4.7-4.6 4.7-12 .3-16.4"></path>
              <path d="M57.6 12.3C57.6 4.5 52.6 0 46 0 40 0 34.7 6 34.6 12.3L46 24l11.6-11.7z"></path>
              <path d="M30.5 13.8c-2-2.2-5-3.5-8-3.5-3.2 0-6 1-8.3 3.2-4.6 4.4-4.7 11.7-.4 16.3l1.7 1.8h24.3l4-3.8-13.3-14z"></path>
              <path d="M11.6 35c-3 0-6 1.3-8.2 3.4-2.2 2.2-3.4 5-3.4 8 0 3.2.6 11.7 13.2 11.7l23-22.8H11.7z"></path>
              <path d="M34.6 80c0 7.8 5 12.3 11.5 12.3 6.4 0 11.6-6 11.7-12.3L46 68.3 34.6 80z"></path>
              <path d="M78.4 63.7L76.7 62l-24.3-.2-4 4L62 79.5c4.4 4.6 11.7 4.7 16.3.4 4.6-4.4 4.7-11.7.4-16.3"></path>
              <path d="M79.2 35.3L56 58.3h24.6c3.2 0 6-1 8.2-3.2 2.2-2 3.4-5 3.4-8 0-6.4-5-11.8-13-11.7"></path>
            </svg>
          </IconButton>
          <IconButton href='https://www.linkedin.com/in/dylanmerigaud/' aria-label="Linkedin">
            <FaLinkedin/>
          </IconButton>
          <IconButton href='mailto:dylanmerigaud@gmail.com' aria-label="Send Mail">
            <FaEnvelopeO/>
          </IconButton>
          </div>
          <IconButton className={classes.themeButton} onClick={this.props.switchTheme} aria-label="Switch Theme">
            <FaLightbulbO/>
          </IconButton>
        </div>
      </header>
    )
  }
}

export default withStyles(styles)(Header)
