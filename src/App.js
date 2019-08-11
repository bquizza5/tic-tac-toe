import React, { useState } from 'react';
import Space from './space'

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
    <div className='app'>
    <h1>Tic-Tac-Toe</h1>
      <h2>{status}</h2>
      <div className="board">
        <Space name='topLeft' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='top left space' />
        <Space name='topMid' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='top mid space'/>
        <Space name='topRight' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='top right space'/>
        <Space name='midLeft' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='mid left space'/>
        <Space name='midMid' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='mid mid space'/>
        <Space name='midRight' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='mid right space'/>
        <Space name='botLeft' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='bot left space'/>
        <Space name='botMid' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='bot mid space'/>
        <Space name='botRight' status={status} setStatus={setStatus} turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} className='bot right space'/>
      </div>
        { status !== 'game in process'? (<h2>Click below to Play Again</h2>) : (<h2>it is {turn}'s turn</h2>)}
          
        <button onClick={reset}>Play Again</button>
    </div>
  );
}

export default App;
