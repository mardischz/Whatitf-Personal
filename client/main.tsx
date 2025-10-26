import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root not found");

// Reuse the same root across HMR to avoid duplicate createRoot warnings
// @ts-expect-error - attach to DOM node for persistence across reloads
let root = container._reactRoot || createRoot(container);
// @ts-expect-error - attach to DOM node for persistence across reloads
container._reactRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
