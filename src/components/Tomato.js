import React from 'react'
import PropTypes from 'prop-types'

export const format = (time) => {
  return `${time.getMinutes()}:${time.getSeconds()}`
}

const Tomato = ({time, complete}) => (
  <li>{time}</li>
)

Tomato.propTypes = {
  completed: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired
}

export default Tomato
