import React, { useEffect, useContext } from 'react'
import { boardContext } from './App'






const Space = (props) => {

    const { status, setStatus, board, setBoard, turn, setTurn } = useContext(boardContext);

      useEffect(() => {

          

    setTimeout(() => {
        
    
        if ((board.topLeft === 'x' && board.topMid === 'x' && board.topRight === 'x') ||
            (board.midLeft === 'x' && board.midMid === 'x' && board.midRight === 'x') ||
            (board.botLeft === 'x' && board.botMid === 'x' && board.botRight === 'x') ||
            (board.topLeft === 'x' && board.midMid === 'x' && board.botRight === 'x') ||
            (board.topRight === 'x' && board.midMid === 'x' && board.botLeft === 'x') ||
            (board.topLeft === 'x' && board.midLeft === 'x' && board.botLeft === 'x') ||
            (board.topMid === 'x' && board.midMid === 'x' && board.botMid === 'x') ||
            (board.topRight === 'x' && board.midRight === 'x' && board.botRight === 'x')){
                setStatus('X Won!');
            } else if (
            (board.topLeft === 'o' && board.topMid === 'o' && board.topRight === 'o') ||
            (board.midLeft === 'o' && board.midMid === 'o' && board.midRight === 'o') ||
            (board.botLeft === 'o' && board.botMid === 'o' && board.botRight === 'o') ||
            (board.topLeft === 'o' && board.midMid === 'o' && board.botRight === 'o') ||
            (board.topRight === 'o' && board.midMid === 'o' && board.botLeft === 'o') ||
            (board.topLeft === 'o' && board.midLeft === 'o' && board.botLeft === 'o') ||
            (board.topMid === 'o' && board.midMid === 'o' && board.botMid === 'o') ||
            (board.topRight === 'o' && board.midRight === 'o' && board.botRight === 'o')){
            
            setStatus('O Won!');
        } else {
            if (
                
                Object.values(board)[0] !=='-' &&
                Object.values(board)[1] !=='-' &&
                Object.values(board)[2] !=='-' &&
                Object.values(board)[3] !=='-' &&
                Object.values(board)[4] !=='-' &&
                Object.values(board)[5] !=='-' &&
                Object.values(board)[6] !=='-' &&
                Object.values(board)[7] !=='-' &&
                Object.values(board)[8] !=='-'
                ) {
                    setStatus('Tie Game!')
                }
        }
    }, 10);

    },[board])

  
    

    const clickHandler = (target) => {
        if(status === 'game in process') {
            if (target.target.innerHTML !== '-') {
                console.log('space taken')
            } else {
                setBoard({...board, [props.name]: turn})
                    if (turn === 'x') {
                        setTurn('o')  
                    }else {
                        setTurn('x')
                    }
                }
        } else {
            console.log('game over')
        }
  }



    return (
        <div onClick={(target) => clickHandler(target)} className={props.className}>{board[`${props.name}`]}</div>
    )
}
export default Space;