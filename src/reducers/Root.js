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
  sectionIndexX: new Array(sectionsYLength).fill(0),
  lastMoveDirection: undefined,
  lastSectionIndexY: 0,
  lastSectionIndexX: 0,
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
          {
            lastMoveDirection: action.up ? 'up' : 'down',
            sectionIndexY: newSectionIndexY,
            lastSectionIndexY: state.sectionIndexY,
            lastSectionIndexX: state.sectionIndexX[state.sectionIndexY],
          },
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
          {
            lastMoveDirection: action.up ? 'right' : 'left',
            sectionIndexX: newSectionIndexX,
            lastSectionIndexY: state.sectionIndexY,
            lastSectionIndexX: state.sectionIndexX[state.sectionIndexY],
          },
        )
      }
    case SECTION_SET_FROM_PATHNAME:
      {
        const pathnameArray = action.pathname.split('/').filter(elem => elem !== '')
        if (pathnameArray.length === 1 || pathnameArray.length === 2) {
          let sectionIndexY;
          for (var i = 0; i < sectionsYLength; i++)
            if (sections[i].path === pathnameArray[0]) {
              sectionIndexY = i
              break
            }
          if (sectionIndexY !== undefined) {
            if (pathnameArray.length === 1)
              return Object.assign(
                {},
                state,
                {
                  sectionIndexY,
                },
              )
            const parsedSecondePathname = parseInt(pathnameArray[1], 10)
            if (!isNaN(parsedSecondePathname) && parsedSecondePathname >= 0 && parsedSecondePathname < sections[sectionIndexY].length) {
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
        setNewLocationPathname(state.sectionIndexY, state.sectionIndexX[state.sectionIndexY])
        return Object.assign(
          {},
          state,
        )
      }
    case SECTION_RESET:
      if (action.onlyX) {
        const newSectionIndexX = state.sectionIndexX.slice(0)
        newSectionIndexX[state.sectionIndexY] = initialState.sectionIndexX[state.sectionIndexY]
        setNewLocationPathname(state.sectionIndexY, newSectionIndexX[state.sectionIndexY])
        return Object.assign(
          {},
          state,
          {
            sectionIndexX: newSectionIndexX,
            lastSectionIndexX: state.lastSectionIndexX,
          },
        )
      }
      else {
        setNewLocationPathname(initialState.sectionIndexY, initialState.sectionIndexX[initialState.sectionIndexY])
        return Object.assign(
          {},
          state,
          {
            lastMoveDirection: 'reset',
            sectionIndexY: initialState.sectionIndexY,
            sectionIndexX: initialState.sectionIndexX,
            lastSectionIndexY: initialState.lastSectionIndexY,
            lastSectionIndexX: initialState.lastSectionIndexX,
          },
        )
      }
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