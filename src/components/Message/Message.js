import classes from "./Message.module.scss";

export const Message = ({ message }) => {
  return <h1 className={classes.title}>{message}</h1>;
};
