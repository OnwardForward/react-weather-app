import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/97951-gaelle-petzi-tiepmo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Gaelle Petzi Tiepmo</strong>.
          </a>{" "}
          This project is{" "}
          <a
            href="https://github.com/OnwardForward/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on <strong>GitHub</strong>
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-gaellept.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            and is hosted on <strong>Netlify</strong>.
          </a>
        </footer>
      </div>
    </div>
  );
}
