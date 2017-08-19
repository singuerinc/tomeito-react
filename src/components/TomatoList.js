import React from 'react'
import PropTypes from 'prop-types'
import Tomato from './Tomato'

const TomatoList = ({tomatoes}) => (
  <ul>
    {tomatoes.map((tomato, idx) => (
      <Tomato key={idx} {...tomato} />
    ))}
  </ul>
)

TomatoList.propTypes = {
  tomatoes: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      complete: PropTypes.bool.isRequired
    })
  )
}

export default TomatoList
