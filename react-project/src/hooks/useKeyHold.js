import React from "react";

function useKeyHold(key, callbackDown, callbackUp) {
  React.useEffect(() => {
    function handleDown(e) {
      if (e.code === key) {
        callbackDown(e);
      }
    }
    function handleUp(e) {
      if (e.code === key) {
        callbackUp(e);
      }
    }

    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);

    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, [key, callbackDown, callbackUp]);
}

export default useKeyHold;
