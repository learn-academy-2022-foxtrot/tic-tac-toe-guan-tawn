import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null))

  let [playerOne, setPlayerOne] = useState(true)
  let [playerTwo, setPlayerTwo] = useState(false)

  // let [squareStyle,setSquareStyle] = useState({
  //   ifClicked : false

  // })

  // let ifClicked = false

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
    else if (playerTwo) {
      
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
   handleWin()

    let winCon = {
      winCon1: [square[0], square[1], square[2]],
      winCon2: [square[3], square[4], square[5]],
      winCon3: [square[6], square[7], square[8]],
      winCon4: [square[0], square[3], square[6]],
      winCon5: [square[1], square[4], square[7]],
      winCon6: [square[2], square[5], square[8]],
      winCon7: [square[0], square[4], square[8]],
      winCon8: [square[2], square[4], square[6]],
    }

    // let xWins = ['X', 'X', 'X']
    // console.log(xWins)
    // // let oWins = ['O','O','O']
    
    // console.log(winCon.winCon1 )
    // console.log(winCon.winCon1 == xWins)
    // if (winCon.winCon1 !== null){
    //   alert ('You Won')
    // }

    //console.log(squareStyle.ifClicked)
  }


      const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winCon = {
      winCon1: [square[0], square[1], square[2]],
      winCon2: [square[3], square[4], square[5]],
      winCon3: [square[6], square[7], square[8]],
      winCon4: [square[0], square[3], square[6]],
      winCon5: [square[1], square[4], square[7]],
      winCon6: [square[2], square[5], square[8]],
      winCon7: [square[0], square[4], square[8]],
      winCon8: [square[2], square[4], square[6]],
    }

  const handleWin = () => {

    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (
        square[a] &&
        square[a] === square[b] &&
        square[a] === square[c]
      ) {
        console.log(square[a])
        alert(`${square[a]}'s Wins`);
        //handleReset()
      }

    }
    return null
  };

  let handleReset = () => {
    setSquare(Array(9).fill(null))
    setPlayerOne(true)
    setPlayerTwo(false)
  }


  return (
    <>
      <h1>Tic Tac Toe</h1>
      <button onClick={handleReset}>
        Reset Game
      </button>
      <div className='board'>

        {square.map((square, index) => {

          return <Square
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
            key={index}
          // squareStyle = {squareStyle}
          // ifClicked ={ifClicked} 


          />
        })}

        
      </div>
    </>
  )
}

export default App