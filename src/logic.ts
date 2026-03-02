export type State = {
  word: string
}

const states = {
  absent: "#333333",
  correct: "green",
  present:"yellow",
  unknown:"grey"
}

export function createState(): State {
  return {
    word: "dazzle",
  }
}

// export function getLetterState( state: State, letter: string, position?: number,): string {
//   return states.unknown
// } 

export function getLetterState(state: State, letter: string, position?: number): string {
  if (letter === "_" || letter === " ") {
    return states.unknown
  }
  if (position !== undefined && state.word[position] === letter) {
    return states.correct
  }
  if (state.word.includes(letter)) {
    return states.present
  }
  return states.absent
}