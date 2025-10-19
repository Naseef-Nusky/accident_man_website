import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./index.css";

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
