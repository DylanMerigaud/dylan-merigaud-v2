import sections from 'configs/sections'
import {
  sectionGetNewValue,
} from 'helpers/sectionHelper'
import {
  SECTION_SWITCH_Y,
  SECTION_SWITCH_X,
  SWITCH_THEME,
  INIT_SECTIONS_X,
} from 'actions/actions'

const initialState = {
  themeType: 'dark',
  sectionIndexY: 0,
  sectionIndexX: []
}

const sectionsYLength = sections.length;

const Root = (state = initialState, action) => {
  switch (action.type) {
    case SECTION_SWITCH_Y:
      return Object.assign(
        {},
        state,
        { sectionIndexY: sectionGetNewValue(action.up, state.sectionIndexY, sectionsYLength) },
      )
    case SECTION_SWITCH_X:
    {
      const newSectionIndexX = state.sectionIndexX.slice(0)
      newSectionIndexX[state.sectionIndexY] = sectionGetNewValue(action.up, newSectionIndexX[state.sectionIndexY], sections[state.sectionIndexY].length)
      return Object.assign(
        {},
        state,
        { sectionIndexX: newSectionIndexX },
      )
    }
    case SWITCH_THEME:
      return Object.assign(
        {},
        state,
        { themeType: state.themeType === 'dark' ? 'light' : 'dark' },
      )
    case INIT_SECTIONS_X:
      return Object.assign(
        {},
        state,
        { sectionIndexX: new Array(action.numberOfSectionsY).fill(0) },
      )
    default:
      return state
  }
}

export default Root