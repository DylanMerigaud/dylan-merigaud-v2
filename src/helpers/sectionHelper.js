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

const touchStartHandler = (e) => {
  if (e.touches.length > 0) {
    this.touchStartX = e.touches[0].clientX
    this.touchStartY = e.touches[0].clientY
  }
}

const touchMoveHandler = (e) => {
  if (e.touches.length > 0) {
    this.touchLastX = e.touches[0].clientX
    this.touchLastY = e.touches[0].clientY
  }
}

const touchEndHandler = (e, verticalCallback, horizontalCallback) => {
  if (this.touchStartX === undefined || this.touchStartY === undefined)
  return ;
  const travelX = this.touchLastX - this.touchStartX
  const travelY = this.touchLastY - this.touchStartY
  const travelXABS = Math.abs(travelX)
  const travelYABS = Math.abs(travelY)
  if (travelXABS > travelYABS && travelXABS > 30) {
    horizontalCallback(travelX < 0)
  } else if (travelYABS > 30) {
    verticalCallback(travelY < 0)
  }
  this.touchStartX = undefined
  this.touchStartY = undefined
  this.touchLastX = undefined
  this.touchLastY = undefined
}

const sectionGetNewValue = (up, sectionIndex, length, loop = true) => {
  let newSectionIndex = sectionIndex + (up ? 1 : -1)
  if (newSectionIndex < 0) newSectionIndex = loop ? length - 1 : 0
  if (newSectionIndex >= length) newSectionIndex = loop ? 0 : length - 1
  return newSectionIndex
}

const setNewLocationPathname = (sectionIndexY, sectionIndexX) => {
  if (sectionIndexY === 0 && sectionIndexX === 0)
  return window.history.replaceState(null, null, '/')
  if (sectionIndexX === 0)
  return window.history.replaceState(null, null, '/' + sections[sectionIndexY].path)
  return window.history.replaceState(null, null, '/' + sections[sectionIndexY].path + '/' + sectionIndexX.toString())
}

export {
  mouseWheelHandlerX,
  mouseWheelHandlerY,
  buttonPressHandlerX,
  buttonPressHandlerY,
  touchStartHandler,
  touchMoveHandler,
  touchEndHandler,
  sectionGetNewValue,
  setNewLocationPathname,
}