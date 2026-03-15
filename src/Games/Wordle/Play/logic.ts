export type State = {
  word: string
  guesses: string[]
  currentGuess: string
}

const states = {
  absent: "#333333",
  correct: "green",
  present: "yellow",
  unknown: "grey",
}

export function createState(): State {
  return {
    word: "dazzle",
    guesses: [],
    currentGuess: "",
  }
}

export function getLetterState(
  state: State,
  letter: string,
  position?: number,
): string {
  if (letter === "_" || letter === " ") return states.unknown

  if (position !== undefined) {
    if (state.word[position] === letter) return states.correct
    if (state.word.includes(letter)) return states.present
    return states.absent
  }

  const allGuessedLetters = state.guesses.join("")
  if (!allGuessedLetters.includes(letter)) return states.unknown

  for (const guess of state.guesses) {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === letter && state.word[i] === letter) return states.correct
    }
  }

  if (state.word.includes(letter)) return states.present
  return states.absent
}

export function addLetter(state: State, letter: string): State {
  if (state.currentGuess.length >= 6) return state
  return { ...state, currentGuess: state.currentGuess + letter }
}

export function submitGuess(state: State): { state: State; valid: boolean } {
  if (state.currentGuess.length !== 6) return { state, valid: false }
  return {
    state: {
      ...state,
      guesses: [...state.guesses, state.currentGuess],
      currentGuess: "",
    },
    valid: true,
  }
}

/** Returns true if the current guess matches the target word. */
export function checkGuess(state: State): boolean {
  return state.currentGuess === state.word
}
