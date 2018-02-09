const styles = theme => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr max-content',
    gridTemplateRow: '1fr',
    gridTemplateAreas: '\'SectionMain SectionYNav\' \'SectionMain SectionXNav\'',
    alignItems: 'center',
    justifyItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyItems: 'start',
      gridTemplateColumns: 'max-content 1fr max-content',
      gridTemplateAreas: '\'SectionYNav SectionMain SectionXNav\'',
    }
  },
  paper: {
    // width: 'fit-content',
    padding: '1rem'
  },
})

export default styles