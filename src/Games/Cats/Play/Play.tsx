import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { useCat, type Animal } from "../api"
import styles from "./Play.module.css"

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return `Error: ${error.message}`
  return "Something went wrong."
}

const CatsWrapper: React.FC = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className={styles.wrapper}>
          <p className={styles.error}>{getErrorMessage(error)}</p>
          <button className={styles.button} onClick={resetErrorBoundary}>
            Retry
          </button>
        </div>
      )}
    >
      <Suspense fallback={<CatsView />}>
        <CatsPlay />
      </Suspense>
    </ErrorBoundary>
  )
}

const CatsPlay: React.FC = () => {
  const [cat, { refresh }] = useCat()
  return <CatsView animal={cat} refresh={refresh} />
}

const CatsView: React.FC<{ animal?: Animal; refresh?: () => void }> = ({
  animal,
  refresh,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled={!refresh}
        onClick={() => refresh?.()}
      >
        Get new Cat!
      </button>

      {animal ? (
        <img
          className={styles.image}
          src={animal.url}
          width={512}
          alt="A random cat"
        />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  )
}

export default CatsWrapper