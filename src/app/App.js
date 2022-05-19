import { useState, useEffect } from "react";
import "./App.module.scss";
import { nanoid } from "nanoid";
import { Message } from "../components/Message/Message";
import MessageForm from "../components/MessageForm/MessageForm";

const botMessage = { author: "bot", message: "hi" };

function App() {
  const [messagesList, setMessageList] = useState([botMessage]);

  const callbackMessage = (value) => {
    setMessageList([...messagesList, { author: "user", message: value }]);
  };

  useEffect(() => {
    let lastMessage = messagesList.at(-1);
    let timerId = null;
    if (messagesList.length && lastMessage.author === "user") {
      timerId = setTimeout(() => {
        setMessageList([...messagesList, botMessage]);
      }, 2000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messagesList]);

  return (
    <div>
      {messagesList.map((message) => (
        <Message key={nanoid()} message={message} />
      ))}
      <MessageForm callbackMessage={callbackMessage}></MessageForm>
    </div>
  );
}

export default App;
