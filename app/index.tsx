import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/style.css";

// Render your React component
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
