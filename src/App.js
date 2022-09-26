import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null))

  let [playerOne, setPlayerOne] = useState(true)
  let [playerTwo, setPlayerTwo] = useState(false)
  
  let [squareStyle,setSquareStyle] = useState({
    ifClicked : false

  })

  

  const handleGamePlay = (clickSquare) => {
    let newBoard = [...square]
    //console.log(playerOne, playerTwo, "test line 0")
    if (playerOne) {
      newBoard[clickSquare] = true ? "X" : "O"
      setSquare(newBoard)
      playerOne = false
      setPlayerOne(playerOne)
      playerTwo = true
      setPlayerTwo(playerTwo)

      //console.log(playerOne, playerTwo, "test line 1")
    } 
    else if (playerTwo){
      // console.log(playerOne, playerTwo,'play two')
      newBoard[clickSquare] = true ? "O" : "X"
      setSquare(newBoard)
      playerOne = true
      setPlayerOne(playerOne)
      playerTwo = false
      setPlayerTwo(playerTwo)
    }
    else {
     return 'error'
    }

    //console.log(squareStyle.ifClicked)
  }



  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='board'>

        {square.map((square, index) => {

          return <Square
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            key={index}
            squareStyle = {squareStyle}


          />
        })}
      </div>
    </>
  )
}

export default App