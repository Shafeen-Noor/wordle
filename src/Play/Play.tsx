import Guessed from "./Guessed/Guessed";
import Keyboard from "./Keyboard/Keyboard";
import { useState } from "react";
import {
  type State,
  createState,
  getLetterState,
  addLetter,
  submitGuess,
} from "./logic";

const Play: React.FC = () => {
  const [state, setState] = useState<State>(() => createState());
  const won = state.guesses.includes(state.word);
  const lost = !won && state.guesses.length >= 6;
  return (
    <>
      <Guessed
        guesses={state.guesses}
        currentGuess={state.currentGuess}
        getState={(letter: string, position: number) =>
          getLetterState(state, letter, position)
        }
      ></Guessed>
      {won && <h2>You Won!</h2>}
      {lost && <h2>You Lost!</h2>}

      {!won && !lost && (
        <Keyboard
          getState={(letter: string) => getLetterState(state, letter)}
          onChange={(letter: string) => setState(addLetter(state, letter))}
          onSubmit={() => {
            const result = submitGuess(state);
            setState(result.state);
            return result.valid;
          }}
        ></Keyboard>
      )}
    </>
  );
};

export default Play;
