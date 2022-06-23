import { ADD_MESSAGE } from "./types";

export const addMessage = (chatId, message) => {
  return { type: ADD_MESSAGE, chatId, message };
};
