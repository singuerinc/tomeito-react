import React from 'react'

export const format = (time) => {
  return `${time.getMinutes()}:${time.getSeconds()}`
}

export default (props) => {
  return (
    <div>{format(props.tomato.time)}</div>
  )
}
