import React from "react";

function useKeyEvent(key, callback, keyEvent) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener(keyEvent, handleEscape);
    return () => {
      window.removeEventListener(keyEvent, handleEscape);
    };
  }, [key, callback, keyEvent]);
}

export default useKeyEvent;
