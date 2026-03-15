import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

import {
  addLetter,
  checkGuess,
  createState,
  getLetterState,
  submitGuess,
  type State,
} from "./logic"

type ContextValue = {
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}

const WordleContext = createContext<ContextValue | undefined>(undefined)

export const WordleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<State>(() => createState())
  const context = useMemo(() => ({ state, setState }), [state])
  return <WordleContext value={context}>{children}</WordleContext>
}

/** Returns the full game state. */
// eslint-disable-next-line react-refresh/only-export-components
export function useWordle(): State {
  const context = useContext(WordleContext)
  if (!context) throw new Error("Requires WordleContext.")
  return context.state
}

/** Returns letter colouring helper bound to the current state. */
// eslint-disable-next-line react-refresh/only-export-components
export function useWordleLetterState(): (
  letter: string,
  position?: number,
) => string {
  const state = useWordle()
  return (letter, position) => getLetterState(state, letter, position)
}

/** Returns guess input controls and submit handler. */
// eslint-disable-next-line react-refresh/only-export-components
export function useWordleGuess(): {
  guess: string
  addLetter: (letter: string) => void
  submitGuess: () => boolean
} {
  const context = useContext(WordleContext)
  if (!context) throw new Error("Requires WordleContext.")

  const add = useCallback(
    (letter: string) => {
      context.setState((state) => addLetter(state, letter))
    },
    [context],
  )

  const submit = useCallback(() => {
    const won = checkGuess(context.state)
    const result = submitGuess(context.state)
    context.setState(result.state)
    return result.valid && !won
  }, [context])

  return {
    guess: context.state.currentGuess,
    addLetter: add,
    submitGuess: submit,
  }
}