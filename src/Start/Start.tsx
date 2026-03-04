import styles from "./Start.module.css";

const Start: React.FC<{ onBegin: () => void }> = ({ onBegin }) => {
  return (
    <>
      <h1 className={styles.app_heading}>Wordle</h1>
      <button className={styles.start_button} onClick={onBegin}>
        Begin
      </button>
    </>
  );
};

export default Start;
