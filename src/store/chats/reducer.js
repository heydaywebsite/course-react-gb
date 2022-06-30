import { ADD_CHAT } from "./types";

const initialState = {
  chatsList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatsList: [
          ...state.chatsList,
          {
            id: `id${state.chatsList.length}`,
            name: action.name,
          },
        ],
      };
    default:
      return state;
  }
};
