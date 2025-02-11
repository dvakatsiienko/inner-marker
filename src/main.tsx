/* Core */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Core */
import { App } from "./App";

/* Instruments */
import "./theme/index.scss";
import "./theme/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
