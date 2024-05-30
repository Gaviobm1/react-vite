import React from "react";
import { MessageContext } from "../MessageProvider/MessageProvider";
import Button from "../Button/Button";

function MessageHistory() {
  const { message, removeMessage } = React.useContext(MessageContext);

  return (
    <ul style={{ listStyle: "none" }}>
      {message.map(({ id, message }) => (
        <li key={id}>
          {message} <Button handleClick={() => removeMessage(id)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

export default MessageHistory;
