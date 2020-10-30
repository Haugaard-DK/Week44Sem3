import { useState } from "react";

function Chuck() {
  const [chuckJoke, setChuckJoke] = useState("");
  const url = "https://api.chucknorris.io/jokes/random";

  function getChuckJoke() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setChuckJoke(data.value);
      });
  }

  return (
    <div>
      <button onClick={getChuckJoke}>Get Chuck joke</button>
      <p>{chuckJoke}</p>
    </div>
  );
}

export default Chuck;
