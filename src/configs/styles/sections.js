const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr max-content',
        gridTemplateAreas: '\'SectionMain SectionYNav\' \'SectionMain SectionXNav\'',
        alignItems: 'center',
        justifyItems: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyItems: 'start',
            gridTemplateColumns: 'max-content 1fr max-content',
            gridTemplateAreas: '\'SectionYNav SectionMain SectionXNav\'',
        }
    },
})

export default styles