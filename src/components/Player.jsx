import { useState } from 'react';
export default function Player({name,symbol,isActive,fun}){
    const [currentName,edit] = useState(name)
    const [val,set] = useState(false)
    function Change(){
        set((val)=>!val)
        fun(symbol,currentName)
    }
    function handle(event){
        edit(event.target.value)  
    }
    let playername = <span className="player-name">{currentName}</span> 
    if(val){
        playername = <input type='text' value={currentName} onChange={handle} required /> 
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {playername}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button className="player-button" onClick={Change}>{val ? 'Save' :'Edit'}</button>
        </li>
    )
}