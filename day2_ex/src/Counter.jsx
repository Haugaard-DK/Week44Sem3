import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  useEffect(() => {
    if (localStorage.getItem("counter") != null) {
      setCounter(Number(localStorage.getItem("counter")));
    }
  }, []);
  const { count, crement } = props;

  const [counter, setCounter] = useState(count);
  function incrementCounter() {
    setCounter(counter + crement);
  }

  function decrementCounter() {
    setCounter(counter - crement);
  }

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
  crement: PropTypes.number,
};

Counter.defaultProps = {
  count: 0,
  crement: 1,
};

export default Counter;
