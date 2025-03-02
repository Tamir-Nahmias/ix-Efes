import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
const matrixSize = prompt("please enter a value:");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App matrixSize={matrixSize} />
  </StrictMode>
);
