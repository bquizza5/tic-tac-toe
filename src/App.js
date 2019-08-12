import React, { useState, createContext } from 'react';
import Space from './space'

export const boardContext = createContext();

function App() {

  const [ status, setStatus] = useState('game in process')
  const [ turn, setTurn ] = useState('x')
  const [ board, setBoard ] = useState({
    topLeft: '-',
    topMid : '-',
    topRight: '-',
    midLeft: '-',
    midMid: '-',
    midRight: '-',
    botLeft: '-',
    botMid: '-',
    botRight: '-'
    })
  

  const reset = () => {
    setStatus('game in process');
    setTurn('x');
    setBoard({
    topLeft: '-',
    topMid : '-',
    topRight: '-',
    midLeft: '-',
    midMid: '-',
    midRight: '-',
    botLeft: '-',
    botMid: '-',
    botRight: '-'
    })
  }

  return (
    <boardContext.Provider value={{ status, setStatus, board, setBoard, turn, setTurn }}>
      <div className='app'>
        <h1>Tic-Tac-Toe</h1>
        <h2>{status}</h2>
          <div className="board">
            {Object.keys(board).map((space) => {
              return (
                <Space
                key={space} 
                name={space}  
                className={`${space.substring(0,3).toLowerCase()} ${space.substring(3).toLowerCase()} space`}
              />)
            })}
          </div>
          {status !== 'game in process'? (<h2>Click below to Play Again</h2>) : (<h2>it is {turn}'s turn</h2>)}
            
          <button onClick={reset}>Play Again</button>
      </div>
    </boardContext.Provider>
  );
}

export default App;
