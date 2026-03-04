export type State = {
  word: string;
  guesses: string[];
  currentGuess: string;
};
const states = {
  absent: "#333333",
  correct: "green",
  present: "yellow",
  unknown: "grey",
};

export function createState(): State {
  return {
    word: "dazzle",
    guesses: [],
    currentGuess: "",
  };
}

// export function getLetterState( state: State, letter: string, position?: number,): string {
//   return states.unknown
// }

// export function getLetterState(
//   state: State,
//   letter: string,
//   position?: number,
// ): string {
//   if (letter === "_" || letter === " ") {
//     return states.unknown;
//   }
//   if (position !== undefined && state.word[position] === letter) {
//     return states.correct;
//   }
//   if (state.word.includes(letter)) {
//     return states.present;
//   }
//   return states.absent;
// }

export function getLetterState(
  state: State,
  letter: string,
  position?: number,
): string {
  if (letter === "_" || letter === " ") return states.unknown;

  // Called from Guessed (position given) — compare against the target word
  if (position !== undefined) {
    if (state.word[position] === letter) return states.correct;
    if (state.word.includes(letter)) return states.present;
    return states.absent;
  }

  // Called from Keyboard (no position) — only color if already guessed
  const allGuessedLetters = state.guesses.join(""); // "dazzleabcdef..."
  if (!allGuessedLetters.includes(letter)) return states.unknown; // not guessed yet → grey

  // Now check what the best result was for this letter across all guesses
  for (const guess of state.guesses) {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === letter && state.word[i] === letter)
        return states.correct; // green wins
    }
  }
  if (state.word.includes(letter)) return states.present; // yellow
  return states.absent; // dark
}

export function addLetter(state: State, letter: string): State {
  if (state.currentGuess.length >= 6) return state;
  return {
    ...state,
    currentGuess: state.currentGuess + letter,
  };
}

export function submitGuess(state: State): { state: State; valid: boolean } {
  if (state.currentGuess.length !== 6) return { state, valid: false };
  return {
    state: {
      ...state,
      guesses: [...state.guesses, state.currentGuess],
      currentGuess: "",
    },
    valid: true,
  };
}
