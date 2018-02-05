import sections from 'configs/sections'
import {
  sectionGetNewValue,
  setNewLocationPathname,
} from 'helpers/sectionHelper'
import {
  SECTION_SWITCH_Y,
  SECTION_SWITCH_X,
  SECTION_SET_FROM_PATHNAME,
  SECTION_RESET,
  SWITCH_THEME,
} from 'actions/Root'

const sectionsYLength = sections.length;

const initialState = {
  themeType: 'dark',
  sectionIndexY: 0,
  sectionIndexX: new Array(sectionsYLength).fill(0)
}

const Root = (state = initialState, action) => {
  switch (action.type) {
    case SECTION_SWITCH_Y:
    {
      const newSectionIndexY = sectionGetNewValue(action.up, state.sectionIndexY, sectionsYLength, true)
      setNewLocationPathname(newSectionIndexY, state.sectionIndexX[newSectionIndexY])
      return Object.assign(
        {},
        state,
        { sectionIndexY: newSectionIndexY },
      )
    }
    case SECTION_SWITCH_X:
      {
        const newSectionIndexX = state.sectionIndexX.slice(0)
        newSectionIndexX[state.sectionIndexY] = sectionGetNewValue(action.up, newSectionIndexX[state.sectionIndexY], sections[state.sectionIndexY].length, false)
        setNewLocationPathname(state.sectionIndexY, newSectionIndexX[state.sectionIndexY])
        return Object.assign(
          {},
          state,
          { sectionIndexX: newSectionIndexX },
        )
      }
    case SECTION_SET_FROM_PATHNAME:
      {
        const pathnameArray = action.pathname.split('/').filter(elem => elem !== '')
        if (pathnameArray.length === 2) {
          let sectionIndexY;
          for (var i = 0; i < sectionsYLength; i++)
            if (sections[i].path === pathnameArray[0]) {
              sectionIndexY = i
              break
            }
          if (sectionIndexY !== undefined) {
            const parsedSecondePathname = parseInt(pathnameArray[1], 10)
            if (isNaN(parsedSecondePathname) && parsedSecondePathname >= 0 && parsedSecondePathname < sections[sectionIndexY].length) {
              const newSectionIndexX = state.sectionIndexX.slice(0)
              newSectionIndexX[sectionIndexY] = parsedSecondePathname
              return Object.assign(
                {},
                state,
                {
                  sectionIndexY,
                  sectionIndexX: newSectionIndexX,
                },
              )
            }
          }
        }
        return Object.assign(
          {},
          state,
        )
      }
    case SECTION_RESET:
      return Object.assign(
        {},
        state,
        {
          sectionIndexY: initialState.sectionIndexY,
          sectionIndexX: initialState.sectionIndexX,
        },
      )
    case SWITCH_THEME:
      return Object.assign(
        {},
        state,
        { themeType: state.themeType === 'dark' ? 'light' : 'dark' },
      )
    default:
      return state
  }
}

export default Root