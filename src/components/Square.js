import React from 'react'

const Square = (props) => {
  console.log(props)
  const handleClick = () => {
    props.handleGamePlay(props.index)
    props.squareStyle.ifClicked = true

  }

  return (
    <div className="square" onClick={handleClick} key={props.index}>
      {props.square}
    </div>
  )
}
export default Square
