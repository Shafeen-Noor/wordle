import styles from './Guessed.module.css';const NUM_GUESSES=6
const Guessed:React.FC<{
  getState:(letter:string, position:number)=>string
}>=({getState})=> {

  return (
    <>
      <h1 className={styles.guessed_heading}>Guessed</h1>
      {Array.from<string>({length:NUM_GUESSES}).fill("______").map((word,index)=>{
        return(
            <div key={index} className={styles.guessed_container} >
                {word.split("").map((letter,index)=>
                    <div key={index} className={styles.letter} style={{background: getState(letter, index),}}>{letter === " " ? "_" : letter}</div>
                )}
            </div>
        )

      })}
    </>
  )
}

export default Guessed
