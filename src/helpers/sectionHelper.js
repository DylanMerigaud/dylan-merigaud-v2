const mouseWheelHandlerX = (e, callback) => {
  if (e.deltaX > 0) callback(true)
  else if (e.deltaX < 0) callback(false)
}

const mouseWheelHandlerY = (e, callback) => {
  if (e.deltaY > 0) callback(true)
  else if (e.deltaY < 0) callback(false)
}

const buttonPressHandlerX = (e, callback) => {
  if (e.code === 'ArrowLeft') callback(true)
  else if (e.code === 'ArrowRight') callback(true)
}

const buttonPressHandlerY = (e, callback) => {
  if (e.code === 'ArrowUp') callback(true)
  else if (e.code === 'ArrowDown') callback(true)
}

const sectionGetNewValue = (up, sectionIndex, length) => {
  let newSectionIndex = sectionIndex + (up ? 1 : -1)
  if (newSectionIndex < 0) newSectionIndex = length - 1
  if (newSectionIndex >= length) newSectionIndex = 0
  return newSectionIndex
}

export {
  mouseWheelHandlerX,
  mouseWheelHandlerY,
  buttonPressHandlerX,
  buttonPressHandlerY,
  sectionGetNewValue,
}