import React from "react";

function useArraySet(initialValue = []) {
  const [array, setArray] = React.useState(initialValue);

  const addItem = React.useCallback((newItem) => {
    setArray((currentArray) => {
      const nextArray = [...currentArray, newItem];
      return nextArray;
    });
  }, []);

  const removeItem = React.useCallback((itemId) => {
    setArray((currentArray) => {
      const nextArray = currentArray.filter(({ id }) => id !== itemId);
      return nextArray;
    });
  }, []);

  return { array, addItem, removeItem };
}

export default useArraySet;
