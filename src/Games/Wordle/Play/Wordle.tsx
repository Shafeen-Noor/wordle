import {
  WordleProvider,
  useWordle,
  useWordleGuess,
  useWordleLetterState,
} from "./context"
import Guessed from "./Guessed/Guessed"
import Keyboard from "./Keyboard/Keyboard"

/** Entry point — provides Wordle state to the tree. */
const WordleWrapper: React.FC = () => {
  return (
    <WordleProvider>
      <Wordle />
    </WordleProvider>
  )
}

/** Game layout — reads from context, no prop drilling. */
const Wordle: React.FC = () => {
  const state = useWordle()
  const getState = useWordleLetterState()
  const { addLetter, submitGuess } = useWordleGuess()

  const won = state.guesses.includes(state.word)
  const lost = !won && state.guesses.length >= 6

  return (
    <>
      <Guessed
        guesses={state.guesses}
        currentGuess={state.currentGuess}
        getState={getState}
      />

      {won && <h2>You Won!</h2>}
      {lost && <h2>You Lost!</h2>}

      {!won && !lost && (
        <Keyboard
          getState={(letter) => getState(letter)}
          onChange={addLetter}
          onSubmit={submitGuess}
        />
      )}
    </>
  )
}

export default WordleWrapper
