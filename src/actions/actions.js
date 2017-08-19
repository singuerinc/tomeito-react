export const CLEAR_ALL = 'CLEAR_ALL'
export const ADD_TOMATO = 'ADD_TOMATO'
export const UPDATE_CURRENT_TOMATO_TIME = 'UPDATE_CURRENT_TOMATO_TIME'
export const SET_CURRENT_TOMATO = 'SET_CURRENT_TOMATO'

export function clearAll () {
  return { type: CLEAR_ALL }
}

export function addTomato () {
  return { type: ADD_TOMATO, payload: {} }
}

export function setCurrentTomato (tomato) {
  return { type: SET_CURRENT_TOMATO, payload: tomato }
}

export function updateCurrentTomatoTime (time) {
  return { type: UPDATE_CURRENT_TOMATO_TIME, payload: time }
}
