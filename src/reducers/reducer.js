import {
    CLEAR_ALL,
    ADD_TOMATO,
    SET_CURRENT_TOMATO,
    UPDATE_CURRENT_TOMATO_TIME
} from '../actions/actions'

const initState = {
  tomatoes: [{
    time: 1000,
    complete: false
  }]
}

export default (state = initState, action) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {...initState}
    case ADD_TOMATO:
      return {...state, tomatoes: state.tomatoes.concat(action.payload)}
    case SET_CURRENT_TOMATO:
      return {...state, currentTomato: action.payload}
    case UPDATE_CURRENT_TOMATO_TIME:
      state.currentTomato.time -= 1000
      return state
    default:
      return state
  }
}
