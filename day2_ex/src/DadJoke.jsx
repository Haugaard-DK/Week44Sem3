import { useState, useEffect } from "react";

function DadJoke() {
  const [dadJoke, setDadJoke] = useState("");
  const url = "https://icanhazdadjoke.com/";

  useEffect(() => {
    const interval = setInterval(() => {
      getJoke();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  function getJoke() {
    fetch(url, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setDadJoke(data.joke);
      });
  }

  return (
    <div>
      <p>Dad joke</p>
      <p>{dadJoke}</p>
    </div>
  );
}

export default DadJoke;
