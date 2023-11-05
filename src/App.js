import { useState } from 'react';
import Player from './components/Player'
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './components/Winning_Combinations';
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
function deriveActivePlayer(gameBoard){
  let active = 'X'
  if(gameBoard.length > 0 && gameBoard[0].player==='X'){
    active = 'O'
  }
  return active
}
function App() {
  //const [activePlayer,set] = useState('X')
  //the above state is not required since we are changing player at same time when gameboard is updated
  const [players,setPlayers] = useState({
    'X':'player1',
    'O':'player2'
  })
  const [gameTurns,update] = useState([])
  const active = deriveActivePlayer(gameTurns)
  //const gameBoard = initialGameBoard;
  //the above way directly edits original one so to create copies see down
  const gameBoard = [...initialGameBoard.map((k)=>[...k])]
    for (const part of gameTurns){
        const {square,player} = part
        const {row,col} = square
        gameBoard[row][col] = player
    }
    let winner;
    for(const comb of WINNING_COMBINATIONS){
      let fss = gameBoard[comb[0].row][comb[0].column]
      let sss = gameBoard[comb[1].row][comb[1].column]
      let tss = gameBoard[comb[2].row][comb[2].column]
      //firstsquaresymbol,second,third
      if(fss && fss===sss && fss===tss){
        winner = players[fss];
      }
    }
    const gameDraw = gameTurns.length === 9 && !winner;
  function changeActivePlayer(rowIndex,colIndex){

    //set((val)=> val==='X' ? 'O' : 'X')
    update((prevBoard)=>{
      const active = deriveActivePlayer(prevBoard)
      console.log(active)
      const updatedBoard = [{square:{row:rowIndex,col:colIndex},player:active},...prevBoard]
      return updatedBoard
    })
  }
  function handleRestart(){
    update([])

  }
  function handlePlayerNames(symbol,playername){
    setPlayers((prevData)=>{
      return {
        ...prevData,
        [symbol]:playername,
    }
    })
  }
  return (
    <div>
      
     
     
     {(winner || gameDraw) ? <GameOver winner={winner} player={active} restart={handleRestart} /> : <div id="game-container">
     
     <ol id='players' className='highlight-player'>
       
       <Player name="player 1" symbol="X" isActive={active==='X' ? true : false} fun={handlePlayerNames}>player 1</Player>
     
       <Player name="player 2" symbol="O" isActive={active==='O' ? true : false} fun={handlePlayerNames}>player 2</Player>
       
     </ol>
     <GameBoard onSelectSquare={changeActivePlayer} board={gameBoard} />
     </div>}
     
   
   <ol id='log'>
    <Log value={gameTurns} />
   </ol>
    </div>
    
     
  );
}

export default App;
//[{square:{col,row},player:active},...prevboard]