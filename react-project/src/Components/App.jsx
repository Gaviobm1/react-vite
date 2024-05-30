import MessageProvider from "./MessageProvider/MessageProvider";

import CountDown from "./CountDown/CountDown";

function App() {
  return (
    <MessageProvider>
      <CountDown target={"June 28, 2024 21:30:00"}>Summer</CountDown>
    </MessageProvider>
  );
}

export default App;
