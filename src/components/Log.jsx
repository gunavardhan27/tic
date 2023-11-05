export default function Log({value}){
    return (
        <>
            {value.map((i)=><li key={`${i.square.row}${i.square.col}`}>{i.player} selected {i.square.row},{i.square.col}</li>)}
        </>
    )
}