import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import { ChatPreview } from '../ui/atoms/ChatPreview';
import { Chat, ChatState } from '../redux/types/chatState';
import { Button } from '../ui/atoms/Button';
import { addChat, deleteChat, sendMessage, setCurrentChat } from '../redux/chatsSlice';
import { Messages } from './Messages';
import React, { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';
import { Color } from '../ui/colors/Color';
import { useKeyboard } from '@react-native-community/hooks';
import { InputWithButton } from '../ui/moleculs/InputWithButton';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { EmptyPage } from '../ui/atoms/EmptyPage';
import { formatLongString } from '../utils/formatLongString';

export const MainPage = () => {
  const { keyboardShown } = useKeyboard();

  const chatsState = useSelector<AppRootStateType, ChatState>((state) => state.chats);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [deletedChats, setDeletedChats] = useState<string[]>([]);

  const onSend = () => {
    dispatch(sendMessage({
      message: {
        id: uuid.v4() as string,
        sender: 'YOU',
        message: inputValue,
        senderAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHLGXe7TD6cBM7l3Fp2LXlUR6ttijfIHx2Q&usqp=CAU'
      },
      chatId: chatsState.currentChat?.id || '',
    }))
    setInputValue('');
  };

  const handleChatPress = (chat: Chat) => {
    dispatch(setCurrentChat(chat));
  };

  const handleAddButtonPress = () => {
    dispatch(addChat());
  };


  // implementation of sneders message to make application more alive
  useEffect(() => {
    if (!inputValue) {
      setTimeout(() => {
        dispatch(sendMessage({
          message: {
            id: uuid.v4() as string,
            sender: chatsState.currentChat?.sender?.name || '',
            message: `Hello! My name is ${chatsState.currentChat?.sender?.name}. I am busy right now, call me later:)`,
            senderAvatar: chatsState.currentChat?.sender?.avatarSrc || ''
          },
          chatId: chatsState.currentChat?.id || '',
        }))
      }, Math.random() * 4000)
    }
  }, [inputValue])

  const LeftSwipeActions = () => {
    return (
      <View
        style={styles.leftSwipeAction}
      >
      </View>
    );
  };

  const handleDeleteChatSwipe = (chatId: string) => {
    setDeletedChats([...deletedChats, chatId]);
    dispatch(deleteChat({ chatId: chatId }))
  };

  return (
    <SafeAreaView style={styles.container}>
      {chatsState.chats.length
        ? <>
        {chatsState.currentChat
          ? (
            <View style={{ height: keyboardShown ? '55%' : '100%' }}>
              <Messages messages={chatsState.currentChat.messages}/>
              <InputWithButton
                // styles={{ position: 'absolute', bottom: keyboardShown ? '45%' : 0 }}
                value={inputValue}
                onChangeText={setInputValue}
                onSend={onSend}
                placeholder={"Type a message..."}
              />
            </View>
          )
          : <ScrollView>
            {
              chatsState.chats.map((chat) => {
                let previewLastMessage = '';

                if (chat.messages.length) {
                  previewLastMessage = `${chat.sender.name}: ${formatLongString(chat.messages[chat.messages.length - 1]?.message)}`;
                }
                if (deletedChats.includes(chat.id)) {
                  return null;
                }
                return (
                  <Swipeable
                    key={chat.id}
                    renderLeftActions={LeftSwipeActions}
                    onSwipeableLeftOpen={() => handleDeleteChatSwipe(chat.id)}
                  >
                    <TouchableOpacity key={chat.sender.id} onPress={() => handleChatPress(chat)}>
                      <ChatPreview
                        avatar={chat.sender.avatarSrc}
                        username={chat.sender.name}
                        lastMessage={previewLastMessage}
                      />
                    </TouchableOpacity>
                  </Swipeable>
                )
              })
            }
          </ScrollView>
        }
      </>
        : <EmptyPage title={'Get started!'} subtitle={'Add your first chat'}/>
      }
      {!chatsState.currentChat && (
        <View style={styles.button}>
          <Button onPress={handleAddButtonPress} title={'+'} size={'m'}/>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BASE_WHITE,
    height: '80%',
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  leftSwipeAction: {
    flex: 1,
    backgroundColor: Color.BASE_WHITE,
  }
});
