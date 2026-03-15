import styles from "./Keyboard.module.css"

const keyboard = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]
const Keyboard: React.FC<{
  getState: (letter: string) => string
  onChange: (guess: string) => void
  onSubmit: () => boolean
}> = ({ getState, onChange, onSubmit }) => {
  return (
    <>
      {keyboard.map((keys, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.key_row}>
            {keys.map((letter, colIndex) => (
              <div
                key={colIndex}
                className={styles.key_box}
                style={{ background: getState(letter) }}
                onClick={() => onChange(letter)}
              >
                {letter}
              </div>
            ))}
          </div>
        )
      })}
      <button className={styles.enter_button} onClick={onSubmit}>
        Enter
      </button>
    </>
  )
}

export default Keyboard
