import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <p className="code-source">
        <a href="https://github.com/i-serra/weather-app-react">Open-sourced code</a> by Inês Serra
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
