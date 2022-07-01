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
              message: action.message.message,
              author: action.message.author,
              id: `${action.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }
    default:
      return state;
  }
};
