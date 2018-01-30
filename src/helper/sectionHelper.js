const mouseWheelHandlerHorizontal = (e, callback) => {
  if (e.deltaX > 0) callback(true)
  else
  if (e.deltaX < 0) callback(false)
}

const mouseWheelHandlerVertical = (e, callback) => {
  if (e.deltaY > 0) callback(true)
  else
  if (e.deltaY < 0) callback(false)
}

const buttonPressHandlerHorizontal = (e, callback) => {
  if (e.code === 'ArrowLeft') callback(true)
  else
  if (e.code === 'ArrowRight') callback(true)
}

const buttonPressHandlerVertical = (e, callback) => {
  if (e.code === 'ArrowUp') callback(true)
  else
  if (e.code === 'ArrowDown') callback(true)
}

const verticalSectionGetNewValue = (up, sectionIndex, sections) => {
  let newSectionIndex;
  newSectionIndex = sectionIndex + (up ? 1 : -1)
  const length = sections.length
  if (newSectionIndex < 0) newSectionIndex = length - 1
  if (newSectionIndex >= length) newSectionIndex = 0
  return newSectionIndex
}

export {
  mouseWheelHandlerHorizontal,
  mouseWheelHandlerVertical,
  buttonPressHandlerHorizontal,
  buttonPressHandlerVertical,
  verticalSectionGetNewValue,
}