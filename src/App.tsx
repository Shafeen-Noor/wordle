import Guessed from './Guessed'
import Keyboard from './Keyboard'
import styles from './Start.module.css'
import { useState } from "react"
import { type State, createState, getLetterState } from "./logic"

const App:React.FC=()=> {
  const [state,setState] =useState<State>()
  if (!state) {
    return (
      <>
        <h1 className={styles.app_heading}>Wordle</h1>
        <button className={styles.start_button} onClick={() => setState(createState())}>Begin</button>
      </>
    )
  }

  return (
    <>
      <h1 className={styles.app_heading}>Wordle</h1>
      <Guessed getState={(letter:string,position:number)=>
        getLetterState(state,letter,position)
      }></Guessed>
      <Keyboard></Keyboard>
    </>
  )
}

export default App
