import './Index.css'
import Guessed from './Guessed'
import Keyboard from './Keyboard'
import { useState } from "react"
import { type State, createState, getLetterState } from "./logic"

const App:React.FC=()=> {
  const [state,setState] =useState<State>()
  if (!state) {
    return (
      <>
        <h1>Wordle</h1>
        <button onClick={() => setState(createState())}>Begin</button>
      </>
    )
  }

  return (
    <>
      <h1>Wordle</h1>
      <Guessed getState={(letter:string,position:number)=>
        getLetterState(state,letter,position)
      }></Guessed>
      <Keyboard></Keyboard>
    </>
  )
}

export default App
