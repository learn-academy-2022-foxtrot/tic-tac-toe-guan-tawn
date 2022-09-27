import React from 'react'

const Square = (props) => {

  const handleClick = () => {
    if (props.square === null) {
      props.handleGamePlay(props.index)

    } else {

      let ranPhrase = ['Try Again Dummy',
        "What are you doing?",
        'Do you know even know how to play?',
        'Bro, That Aint it',
        'X s and O s !! X s && O s', 'She dont like you..',
        "You are not going to win like that, play checkers"]
        
      alert(ranPhrase[Math.floor(Math.random() * ranPhrase.length)])
    }

    // props.squareStyle.ifClicked = true
    console.log(props)




  }

  return (
    <div className="square" onClick={handleClick} key={props.index} >
      {props.square}
    </div>
  )
}
export default Square
