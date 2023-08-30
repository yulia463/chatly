import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatsReducer from './chatsSlice';

const rootReducer = combineReducers({
  chats: chatsReducer,
});

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
  }
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
