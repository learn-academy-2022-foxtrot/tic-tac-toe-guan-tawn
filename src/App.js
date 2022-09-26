import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null))

  const [playerOne, setPlayerOne] = useState(true)
  const [playerTwo, setPlayerTwo] = useState(true)

  const handleGamePlay = (clickSquare) => {
    let newBoard = [...square]
      console.log(playerOne, playerTwo, "test line 0")
    if (playerTwo) {
      newBoard[clickSquare] = false ? "X" : "O"
      setSquare(newBoard)
      setPlayerOne(playerOne = false)
      setPlayerTwo(playerTwo = true)
      console.log(playerOne, playerTwo, "test line 1")
    } 
    // else {
    //   newBoard[clickSquare] = true ? "O" : "X"
    // }
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

          />
        })}
      </div>
    </>
  )
}

export default App