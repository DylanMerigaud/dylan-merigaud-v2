const styles = theme => ({
  root: {
    height: '100%',
    display: 'grid',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      // justifyItems: 'start',
      // gridTemplateColumns: 'max-content 1fr max-content',
      // gridTemplateAreas: '\'SectionYNav SectionMain SectionXNav\'',
    }
  },
  subSectionsContainer: {
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    '& *': {
      // width: '16rem',
      margin: '1rem',
    },
  },
  paper: {
    padding: '1rem'
  },
})

export default styles