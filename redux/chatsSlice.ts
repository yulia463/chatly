import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Chat, ChatState, Message } from './types/chatState';
import { generateRandomSender } from '../utils/generateRandomSender';
//decided to use this library to implement ids creation
import uuid from 'react-native-uuid';

const initialState: ChatState = {
  chats: [],
  currentChat: null,
};
// redux toolkit slice for state storage and CRUD methods
const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat(state) {
      const newChat: Chat = {
        id: uuid.v4() as string,
        sender: generateRandomSender(),
        messages: [],
      };

      state.chats.push(newChat);
      state.currentChat = newChat;
    },
    setCurrentChat(state, newChat: PayloadAction<Chat | null>) {
      state.currentChat = newChat.payload;
    },
    sendMessage(state, data: PayloadAction<{ message: Message, chatId: string }>) {
      const currentChat = state.chats.find((chat) => chat.id === data.payload.chatId);
      if (currentChat) {
        currentChat.messages.push(data.payload.message);
        state.currentChat && state.currentChat.messages.push(data.payload.message)
      }
    },
    editChatName(state, data: PayloadAction<{newChatName: string, chatId: string;}>) {
      const currentChat = state.chats.find((chat) => chat.id === data.payload.chatId);
      if (currentChat) {
        currentChat.sender.name = data.payload.newChatName;
      }
      if(state.currentChat) {
        state.currentChat.sender.name = data.payload.newChatName;
      }
    },
    deleteChat(state, data: PayloadAction<{chatId: string}>) {
      state.chats = state.chats.filter((chat) => chat.id !== data.payload.chatId);
    }
  }
})

export const { addChat, setCurrentChat, sendMessage, editChatName, deleteChat } = chatsSlice.actions;
export default chatsSlice.reducer;
