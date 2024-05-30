import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import useToggle from "../../hooks/useToggle";
import MessageHistory from "../MessageHistory/MessageHistory";
import { MessageContext } from "../MessageProvider/MessageProvider";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function Messenger({ ...delegated }) {
  const { addMessage } = React.useContext(MessageContext);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [showHistory, toggleHistory] = useToggle();

  function handleMessage() {
    const nextMessage = {
      id: Math.random(),
      message: currentMessage,
    };
    setCurrentMessage("");
    addMessage(nextMessage);
  }

  const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5em",
  };

  const style = useDefaultStyle(defaultStyle, delegated.style);

  return (
    <div style={style}>
      <Form handleSubmit={handleMessage}>
        <Input
          id={Math.random()}
          label="Message"
          type="text"
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
      </Form>
      <Button onClick={toggleHistory}>Show History</Button>
      {showHistory && <MessageHistory />}
    </div>
  );
}

export default Messenger;
