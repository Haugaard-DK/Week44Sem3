import "./App.css";
import React from "react";
import Counter from "./Counter";
import Chuck from "./Chuck";
import DadJoke from "./DadJoke";
import ListDemo from "./ListDemo";

function App() {
  return (
    <div className="App">
      <Counter count={25} crement={5} />
      <Chuck />
      <DadJoke />
      <ListDemo />
    </div>
  );
}

export default App;
