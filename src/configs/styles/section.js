const styles = theme => ({
  root: {
    height: '100%',
    display: 'grid',
    alignItems: 'center',
  },
  subSectionsContainer: {
    display: 'flex',
    flexWrap : 'wrap',
    justifyContent: 'center',
    paddingBottom: '1rem',

    // '& *': {
    //   margin: '1rem',
    // },
  },
  paper: {
    maxWidth: '25rem',
    padding: '1.5rem',
    margin: '1rem',
  },
  paperTitle: {
    textAlign: 'center',
  },
  ListItem: {
    paddingTop: 0,
  },
})

export default styles