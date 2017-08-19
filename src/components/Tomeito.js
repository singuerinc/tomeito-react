import React from 'react'
import Clock from './Clock'

export default (props) => {
  console.log(props)
  return (
    <div>
      <Clock tomato={props.currentTomato} />
    </div>
  )
}
