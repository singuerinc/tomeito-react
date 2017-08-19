import Tomato from '../tomato'
import {
    CLEAR_ALL,
    ADD_TOMATO,
    SET_CURRENT_TOMATO
} from '../actions/actions'

const tomato = new Tomato(25 * 60 * 1000)
tomato.play()

const initState = {
  tomatoes: [tomato],
  currentTomato: tomato
}

export default (state = initState, action) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {...initState}
    case ADD_TOMATO:
      return {...state, tomatoes: state.tomatoes.concat(action.payload)}
    case SET_CURRENT_TOMATO:
      return {...state, currentTomato: action.payload}
    default:
      return state
  }
}
