import './Index.css'
const NUM_GUESSES=6
const Guessed:React.FC<{
  getState:(letter:string, position:number)=>string
}>=({getState})=> {

  return (
    <>
      <h1>Guessed</h1>
      {Array.from<string>({length:NUM_GUESSES}).fill("______").map((word,index)=>{
        return(
            <div key={index} style={{display:'flex'}}>
                {word.split("").map((letter,index)=>
                    <div key={index} className="letter" style={{background: getState(letter, index),}}>{letter === " " ? "_" : letter}</div>
                )}
            </div>
        )

      })}
    </>
  )
}

export default Guessed
