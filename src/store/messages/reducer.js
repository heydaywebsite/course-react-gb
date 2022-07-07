import { ADD_MESSAGE } from "./types";

const initialState = {
  messagesList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messagesList[action.chatId] || [];
      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.chatId]: [
            ...currentList,
            {
              message: action.payload.message,
              author: action.payload.author,
              id: action.payload.id,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};
