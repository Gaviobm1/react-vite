import React from "react";
import PropTypes from "prop-types";
import useArraySet from "../../hooks/useArraySet";

export const MessageContext = React.createContext();

function MessageProvider({ children }) {
  const {
    array: message,
    addItem: addMessage,
    removeItem: removeMessage,
  } = useArraySet();

  const value = { message, addMessage, removeMessage };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}

MessageProvider.propTypes = {
  children: PropTypes.object,
};

export default MessageProvider;
