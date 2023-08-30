import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Message } from '../redux/types/chatState';
import { Color } from '../ui/colors/Color';

type MessagesProps = {
  messages: Array<Message>;
};

export const Messages: React.FC<MessagesProps> = (props) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        {props.messages.map((message, index) => {
          const { sender, senderAvatar, id, message: text } = message;
          const isFromUser = sender === 'YOU';

          return (
              <View
                key={id}
                style={[
                  styles.messageContainer,
                  isFromUser ? styles.userMessageContainer : styles.senderMessageContainer,
                ]}
              >
                {!isFromUser && <Image source={{ uri: senderAvatar }} style={styles.senderAvatar}/>}
                <View
                  style={[
                    styles.message,
                    isFromUser ? styles.userMessage : styles.senderMessage,
                  ]}
                >
                  <Text style={isFromUser ? styles.userMessageText : styles.senderMessageText}>{text}</Text>
                </View>
                {isFromUser && <Image source={{ uri: senderAvatar }} style={styles.userAvatar}/>}
              </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BASE_WHITE,
    padding: 10,
    paddingBottom: '20%',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  senderMessageContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  senderAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  message: {
    maxWidth: '80%',
    borderRadius: 10,
    padding: 10,
  },
  userMessage: {
    backgroundColor: Color.BASE_BLUE,
    borderBottomRightRadius: 0,
    color: Color.BASE_WHITE,
  },
  senderMessage: {
    backgroundColor: '#f2f2f2',
    borderBottomLeftRadius: 0,
  },
  userMessageText: {
    color: Color.BASE_WHITE,
  },
  senderMessageText: {
    color: Color.BASE_BLACK,
  },
  rightAction: {
    backgroundColor: '#dd2c00',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  rightActionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

