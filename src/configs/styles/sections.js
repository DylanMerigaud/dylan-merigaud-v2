const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content auto',
        gridTemplateAreas: '\'SectionXNav SectionMain\' \'SectionYNav SectionMain\'',
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