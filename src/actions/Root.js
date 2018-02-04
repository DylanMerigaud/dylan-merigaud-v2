const sectionSwitchY = (up) => {
  return {
    type: 'SECTION_SWITCH_Y',
    up,
  }
}

const sectionSwitchX = (up) => {
  return {
    type: 'SECTION_SWITCH_X',
    up,
  }
}

const switchTheme = () => {
  return {
    type: 'SWITCH_THEME'
  }
}

const initSectionsX = (numberOfSectionsY) => {
  return {
    type: 'INIT_SECTIONS_X',
    numberOfSectionsY,
  }
}

export {
  sectionSwitchY,
  sectionSwitchX,
  switchTheme,
  initSectionsX,
}