import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { chatsReducer } from "./chats";
import { messagesReducer } from "./messages";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(
//   combineReducers({
//     profile: profileReducer,
//     chats: chatsReducer,
//     messages: messagesReducer,
//   }),
//   composeEnhancers(applyMiddleware(thunk))
// );

export const persistor = persistStore(store);
