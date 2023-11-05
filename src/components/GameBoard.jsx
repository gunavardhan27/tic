
//import { useState } from "react"


export default function GameBoard({onSelectSquare,board}){
    //const [gameBoard,update] = useState(initialGameBoard)
    //function updateBoard(rowIndex,colIndex){
      //  
        //update((newBoard)=>{
          ///  const board = [...newBoard].map((inner)=>[...inner])
            //b/oard[rowIndex][colIndex] = activePlayer;
            //return board;
        //})
        //onSelectSquare();
        //imp note :: on calling selectedSquare function we use disabled to make sure a box can ve filled only once ,to make it we use active
        //player value of that block,if it is assigned a value we disable it, othr wise nope
    //}
    //const gameBoard = initialGameBoard;
    //for (const part of rows){
      //  const {square,player} = part
        //const {row,col} = square
        //gameBoard[row][col] = player
    //}
    
    return (
        <ol id="game-board">
            {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=><li key={colIndex}>
                    <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol==='X' || playerSymbol==='O' ? true :false}>
                        {playerSymbol}</button>
                </li>)}
            </ol>
            </li>
             )}
        </ol>
    )
}