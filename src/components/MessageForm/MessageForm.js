import { useState } from "react";
import classes from "./MessageForm.module.scss";

const MessageForm = ({ callbackMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      callbackMessage(message);
      setMessage("");
    }
  };

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={classes.input}
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={classes.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageForm;
