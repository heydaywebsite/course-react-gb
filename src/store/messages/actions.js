import { ADD_MESSAGE } from "./types";
import { db } from "../../services/firebase";
import { ref, child, push, update, onValue } from "firebase/database";

const getPayloadFromSnapshot = (chatId, newMessageKey, dispatch) => {
  const messagesRef = ref(db, `chats/${chatId}/messages${newMessageKey}`);

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const payload = data;
    const messageChatId = chatId;
    dispatch({
      type: ADD_MESSAGE,
      payload,
      chatId: messageChatId,
    });
  });
};

export const addMessageWithFirebase =
  (chatId, message, author) => async (dispatch) => {
    const messageData = {
      id: `${chatId}-${Date.now()}`,
      message: message,
      author: author,
    };
    const newMessageKey = push(
      child(ref(db), "chats/" + chatId + "/messages")
    ).key;

    const updates = {};
    updates["chats/" + chatId + "/messages" + newMessageKey] = messageData;

    getPayloadFromSnapshot(chatId, newMessageKey, dispatch);

    return update(ref(db), updates);
  };
