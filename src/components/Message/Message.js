import classes from "./Message.module.scss";

export const Message = ({ message }) => {
  return (
    <div className={classes.container}>
      <p className={classes.message}>{message.message}</p>
      <span className={classes.author}>{message.author}</span>
    </div>
  );
};
