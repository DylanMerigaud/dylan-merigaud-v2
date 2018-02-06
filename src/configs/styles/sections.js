const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        gridTemplateAreas: '\'SectionXNav SectionMain\' \'SectionYNav SectionMain\'',
        alignItems: 'center',
        justifyItems: 'center',
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'max-content 1fr max-content',
            gridTemplateAreas: '\'SectionYNav SectionMain SectionXNav\'',
        }
    },
})

export default styles