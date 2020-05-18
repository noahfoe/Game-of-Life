import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Game />
      <h3>
        Conway's Game of Life is a zero player game that simulates evolution by
        using 4 rules.
      </h3>
      <p>
        Rule 1: Any live cell with fewer than two live neighbors dies, as if
        caused by under population.
      </p>
      <p>
        Rule 2: Any live cell with two or three live neighbors lives on to the
        next generation.
      </p>
      <p>
        Rule 3: Any live cell with more than three live neighbors dies, as if by
        overpopulation.
      </p>
      <p>
        Rule 4: Any dead cell with exactly three live neighbors becomes a live
        cell, as if by reproduction.
      </p>
    </div>
  );
}

export default App;
