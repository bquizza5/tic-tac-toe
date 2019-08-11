import React, { useEffect } from 'react'




const Space = (props) => {

      useEffect(() => {

          

    setTimeout(() => {
        
    
        if ((props.board.topLeft === 'x' && props.board.topMid === 'x' && props.board.topRight === 'x') ||
            (props.board.midLeft === 'x' && props.board.midMid === 'x' && props.board.midRight === 'x') ||
            (props.board.botLeft === 'x' && props.board.botMid === 'x' && props.board.botRight === 'x') ||
            (props.board.topLeft === 'x' && props.board.midMid === 'x' && props.board.botRight === 'x') ||
            (props.board.topRight === 'x' && props.board.midMid === 'x' && props.board.botLeft === 'x') ||
            (props.board.topLeft === 'x' && props.board.midLeft === 'x' && props.board.botLeft === 'x') ||
            (props.board.topMid === 'x' && props.board.midMid === 'x' && props.board.botMid === 'x') ||
            (props.board.topRight === 'x' && props.board.midRight === 'x' && props.board.botRight === 'x') ||
            (props.board.topLeft === 'o' && props.board.topMid === 'o' && props.board.topRight === 'o') ||
            (props.board.midLeft === 'o' && props.board.midMid === 'o' && props.board.midRight === 'o') ||
            (props.board.botLeft === 'o' && props.board.botMid === 'o' && props.board.botRight === 'o') ||
            (props.board.topLeft === 'o' && props.board.midMid === 'o' && props.board.botRight === 'o') ||
            (props.board.topRight === 'o' && props.board.midMid === 'o' && props.board.botLeft === 'o') ||
            (props.board.topLeft === 'o' && props.board.midLeft === 'o' && props.board.botLeft === 'o') ||
            (props.board.topMid === 'o' && props.board.midMid === 'o' && props.board.botMid === 'o') ||
            (props.board.topRight === 'o' && props.board.midRight === 'o' && props.board.botRight === 'o')){
            
            props.setStatus('game over');
        } else {
            if (
                
                Object.values(props.board)[0] !=='-' &&
                Object.values(props.board)[1] !=='-' &&
                Object.values(props.board)[2] !=='-' &&
                Object.values(props.board)[3] !=='-' &&
                Object.values(props.board)[4] !=='-' &&
                Object.values(props.board)[5] !=='-' &&
                Object.values(props.board)[6] !=='-' &&
                Object.values(props.board)[7] !=='-' &&
                Object.values(props.board)[8] !=='-'
                ){
                    props.setStatus('Tie Game')
                    }
        }
    }, 50);

    },[props.board, props])

  
    

    const clickHandler = (target) => {
        if(props.status !== 'game over'){
            if (target.target.innerHTML !== '-'){
            }else {
            props.setBoard({...props.board, [props.name]: props.turn})
                if (props.turn === 'x') {
                    props.setTurn('o')
                    
                    
                }else {
                    props.setTurn('x')
                }
            }
        }
  }



    return (
        <div onClick={(target) => clickHandler(target)} className={props.className}>{props.board[`${props.name}`]}</div>
    )
}
export default Space;