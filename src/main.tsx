import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Cannot find #root");

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("path");
if (redirectPath) {
  window.history.replaceState(
    null,
    "",
    import.meta.env.BASE_URL + redirectPath.slice(1),
  );
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
