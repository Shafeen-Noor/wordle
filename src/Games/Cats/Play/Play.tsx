import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { useCat, type Cat } from "../api"

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return `Error: ${error.message}`
  return "Something went wrong."
}

const CatsWrapper: React.FC = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <>
          <button onClick={resetErrorBoundary}>Retry</button>
          <div>{getErrorMessage(error)}</div>
        </>
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
  return <CatsView cat={cat} refresh={refresh} />
}

const CatsView: React.FC<{ cat?: Cat; refresh?: () => void }> = ({
  cat,
  refresh,
}) => {
  return (
    <>
      <div>
        <button disabled={!refresh} onClick={() => refresh?.()}>
          Get new Cat!
        </button>
      </div>

      {cat ? (
        <img src={cat.url} width="512" alt="A random cat" />
      ) : (
        <div style={{ width: "512px", height: "512px", background: "gray" }} />
      )}
    </>
  )
}

export default CatsWrapper
