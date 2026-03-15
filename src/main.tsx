import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.tsx"

const root = document.getElementById("root")
if (!root) throw new Error("Cannot find #root")

const redirect = sessionStorage.getItem("redirect")
if (redirect) {
  sessionStorage.removeItem("redirect")
  window.history.replaceState(
    null,
    "",
    import.meta.env.BASE_URL + redirect.slice(1),
  )
}
createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
