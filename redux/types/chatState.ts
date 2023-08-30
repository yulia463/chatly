//typization of state and its entities
export type ChatState = {
  chats: Array<Chat>;
  currentChat: Chat | null;
}

export type Chat = {
  id: string;
  sender: Sender;
  messages: Array<Message>;
}

export type Sender = {
  id: string;
  name: string;
  avatarSrc: string;
}

export type Message = {
  sender: string;
  senderAvatar: string;
  id: string;
  message: string;
}
