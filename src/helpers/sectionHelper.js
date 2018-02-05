import sections from 'configs/sections'

const mouseWheelHandlerX = (e, callback) => {
  if (e.deltaX < 0) callback(false)
  else if (e.deltaX > 0) callback(true)
}

const mouseWheelHandlerY = (e, callback) => {
  if (e.deltaY < 0) callback(false)
  else if (e.deltaY > 0) callback(true)
}

const buttonPressHandlerX = (e, callback) => {
  if (e.code === 'ArrowLeft') callback(false)
  else if (e.code === 'ArrowRight') callback(true)
}

const buttonPressHandlerY = (e, callback) => {
  if (e.code === 'ArrowUp') callback(false)
  else if (e.code === 'ArrowDown') callback(true)
}

const sectionGetNewValue = (up, sectionIndex, length, loop = true) => {
  let newSectionIndex = sectionIndex + (up ? 1 : -1)
  if (newSectionIndex < 0) newSectionIndex = loop ? length - 1 : 0
  if (newSectionIndex >= length) newSectionIndex = loop ? 0 : length - 1
  return newSectionIndex
}

const setNewLocationPathname = (sectionIndexY, sectionIndexX) => {
  const newLocationPathname = '/' + sections[sectionIndexY].path + '/' + sectionIndexX.toString()
  window.history.replaceState(null, null, newLocationPathname)
}

export {
  mouseWheelHandlerX,
  mouseWheelHandlerY,
  buttonPressHandlerX,
  buttonPressHandlerY,
  sectionGetNewValue,
  setNewLocationPathname,
}