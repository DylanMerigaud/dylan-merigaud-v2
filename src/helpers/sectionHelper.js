import sections from 'configs/sections'

const canSwitchSection = (eventObjectSwitchSection) => {
  if (eventObjectSwitchSection.canSwitchSection) {
    eventObjectSwitchSection.canSwitchSection = false
    eventObjectSwitchSection.canSwitchSectionSetTimeout = setTimeout(() => {
      eventObjectSwitchSection.canSwitchSection = true
      eventObjectSwitchSection.canSwitchSectionSetTimeout = undefined
    }, 300)
    return true
  }
  else
    return false
}

const mouseWheelHandlerX = (e, callback, eventObjectSwitchSection) => {
  if (e.deltaX === 0 || !canSwitchSection(eventObjectSwitchSection)) return undefined
  if (e.deltaX > 0) callback(true)
  else if (e.deltaX < 0) callback(false)
}

const mouseWheelHandlerY = (e, callback, eventObjectSwitchSection) => {
  if (e.deltaY === 0 || !canSwitchSection(eventObjectSwitchSection)) return undefined
  if (e.deltaY < 0) callback(true)
  else if (e.deltaY > 0) callback(false)
}

const buttonPressHandlerX = (e, callback) => {
  if (e.code === 'ArrowRight') callback(true)
  else if (e.code === 'ArrowLeft') callback(false)
}

const buttonPressHandlerY = (e, callback) => {
  if (e.code === 'ArrowUp') callback(true)
  else if (e.code === 'ArrowDown') callback(false)
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
    return;
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

const getSectionAnimation = (lastMoveDirection, isAnError, TransitionStatus) => {
  const duration = 2500
  const durationOpacityExit = 1000
  const regularElasticity = 500
  const errorElasticity = 900
  const positiveTranslate = 2
  const negativeTranslate = -positiveTranslate
  const unit = 'rem'
  let returnObject;
  if (lastMoveDirection === 'up')
    returnObject = {
      translateY: [negativeTranslate, 0],
      duration: duration,
      elasticity: regularElasticity,
    }
  else if (lastMoveDirection === 'down')
    returnObject = {
      translateY: [positiveTranslate, 0],
      duration: duration,
      elasticity: regularElasticity,
    }
  else if (lastMoveDirection === 'left')
    returnObject = {
      translateX: [negativeTranslate, 0],
      duration: duration,
      elasticity: isAnError ? errorElasticity : regularElasticity,
    }
  else if (lastMoveDirection === 'right')
    returnObject = {
      translateX: [positiveTranslate, 0],
      duration: duration,
      elasticity: isAnError ? errorElasticity : regularElasticity,
    }
  else if (lastMoveDirection === 'reset') {

  }
  if (TransitionStatus === 'onExiting')
    returnObject.opacity = { value: 0, elasticity: 0, duration: durationOpacityExit }
  else
    returnObject.opacity = { value: 1, elasticity: 0 }
  if (returnObject.translateX) {
    if (TransitionStatus === 'onExiting')
      returnObject.translateX = [returnObject.translateX[1], -returnObject.translateX[0]]
    returnObject.translateX[0] = returnObject.translateX[0].toString() + unit
    returnObject.translateX[1] = returnObject.translateX[1].toString() + unit
  }
  if (returnObject.translateY) {
    if (TransitionStatus === 'onExiting')
      returnObject.translateY = [returnObject.translateY[1], -returnObject.translateY[0]]
    returnObject.translateY[0] = returnObject.translateY[0].toString() + unit
    returnObject.translateY[1] = returnObject.translateY[1].toString() + unit
  }
  return returnObject
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
  getSectionAnimation,
}