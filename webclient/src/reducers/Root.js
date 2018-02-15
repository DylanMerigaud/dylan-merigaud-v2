import sections from 'configs/sections'
import {
  sectionGetNewValue,
  setNewLocationPathname,
  sectionSetFromPath,
} from 'helpers/sectionHelper'
import {
  SECTION_SWITCH_Y,
  SECTION_SWITCH_X,
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
  lastAction: undefined,
}

const initState = () => {
  return Object.assign(
    {},
    initialState,
    sectionSetFromPath(window.location.pathname, sectionsYLength, initialState.sectionIndexX)
  )
}

const Root = (state = initState(), action) => {
  switch (action.type) {
    case SECTION_SWITCH_Y:
      {
        if (state.sectionIndexX[state.sectionIndexY] !== 0) return state
        const newSectionIndexY = sectionGetNewValue(!action.up, state.sectionIndexY, sectionsYLength, true)
        setNewLocationPathname(newSectionIndexY, state.sectionIndexX[newSectionIndexY])
        return Object.assign(
          {},
          state,
          {
            lastMoveDirection: action.up ? 'up' : 'down',
            sectionIndexY: newSectionIndexY,
            lastSectionIndexY: state.sectionIndexY,
            lastSectionIndexX: state.sectionIndexX[state.sectionIndexY],
            lastAction: SECTION_SWITCH_Y,
          },
        )
      }
    case SECTION_SWITCH_X:
      {
        const newSectionIndexX = state.sectionIndexX.slice(0)
        newSectionIndexX[state.sectionIndexY] = sectionGetNewValue(action.up, newSectionIndexX[state.sectionIndexY], sections[state.sectionIndexY].components.length, false)
        setNewLocationPathname(state.sectionIndexY, newSectionIndexX[state.sectionIndexY])
        return Object.assign(
          {},
          state,
          {
            lastMoveDirection: action.up ? 'right' : 'left',
            sectionIndexX: newSectionIndexX,
            lastSectionIndexY: state.sectionIndexY,
            lastSectionIndexX: state.sectionIndexX[state.sectionIndexY],
            lastAction: SECTION_SWITCH_X,
          },
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
            lastMoveDirection: 'reset',
            sectionIndexX: newSectionIndexX,
            lastSectionIndexX: state.lastSectionIndexX,
            lastAction: SECTION_RESET,
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
            lastAction: SECTION_RESET,
          },
        )
      }
    case SWITCH_THEME:
      return Object.assign(
        {},
        state,
        {
          themeType: state.themeType === 'dark' ? 'light' : 'dark',
          lastAction: SWITCH_THEME,
        },
      )
    default:
      return state
  }
}

export default Root