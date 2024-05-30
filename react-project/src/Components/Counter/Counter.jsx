import React from "react";
import Button from "../Button/Button";
import useInterval from "../../hooks/useInterval";
import useToggle from "../../hooks/useToggle";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [show, toggleShow] = useToggle(true);

  function increaseCount() {
    const nextCount = count + 1;
    setCount(nextCount);
  }

  useInterval(increaseCount, 1000);

  return (
    <>
      <Button onClick={toggleShow}>Counter {show ? "OFF" : "ON"}</Button>
      {show && <p>{count}</p>}
    </>
  );
}

export default Counter;
