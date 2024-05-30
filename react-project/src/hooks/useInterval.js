import React from "react";

function useInterval(callback, time) {
  React.useEffect(() => {
    const intervalId = setInterval(callback, time);
    return () => {
      clearInterval(intervalId);
    };
  }, [callback, time]);
}

export default useInterval;
