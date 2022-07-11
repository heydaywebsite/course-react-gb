import { ADD_CHAT } from "./types";

export const addChat = (name) => {
  return { type: ADD_CHAT, name };
};
