import styles from "./Guessed.module.css";

const NUM_GUESSES = 6;

const Guessed: React.FC<{
  guesses: string[];
  currentGuess: string;
  getState: (letter: string, position: number) => string;
}> = ({ guesses, currentGuess, getState }) => {
  const rows = [
    ...guesses,
    currentGuess,
    ...Array(Math.max(0, NUM_GUESSES - guesses.length - 1)).fill(""),
  ];

  return (
    <>
      <h1 className={styles.guessed_heading}>Wordle</h1>

      {rows.map((word: string, rowIndex: number) => (
        <div key={rowIndex} className={styles.guessed_container}>
          {Array.from({ length: 6 }).map((_, colIndex: number) => {
            const letter = word[colIndex] ?? "_";
            return (
              <div
                key={colIndex}
                className={styles.letter}
                style={{ background: getState(letter, colIndex) }}
              >
                {letter === "_" ? "" : letter}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Guessed;
