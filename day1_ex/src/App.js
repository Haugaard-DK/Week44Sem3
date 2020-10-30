import "./App.css";
import React from "react";
import upper, { text1, text2, text3 } from "./file1";
import kurt, { males, females } from "./file2";
import { MultiWelcome } from "./file3";

var person = kurt;
const { firstName, email } = person;
const persons = [...males, ...females];
const persons2 = [...males, "Kurt", "Helle", ...females, "Tina"];

let personV2 = person;
personV2.friends = males.concat(...females);
personV2.phone = 123456;

function App() {
  return (
    <div>
      <h2>Ex 1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppercase me")}</p>

      <h2>Ex 2</h2>
      <p>
        {firstName}, {email}
      </p>
      {console.log(persons)}
      {console.log(persons2)}
      {console.log(personV2)}

      <h2>Ex 3</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
