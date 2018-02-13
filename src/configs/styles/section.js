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
    '& *': {
      margin: '1rem 1rem 3rem 1rem',
    },
  },
  paper: {
    padding: '1rem'
  },
})

export default styles