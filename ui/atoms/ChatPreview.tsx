import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Color } from '../colors/Color';

type ChatPreviewProps = {
  avatar: string;
  username: string;
  lastMessage?: string;
}

export const ChatPreview: React.FC<ChatPreviewProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: props.avatar }}/>
      </View>
      <View>
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.lastMessage}>{props.lastMessage}</Text>
      </View>
      <View style={styles.divider}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    fontSize: 20,
  },
  lastMessage: {
    fontSize: 16,
    color: Color.BASE_GREY,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Color.BASE_GREY,
    position: 'absolute',
    marginLeft: 16,
    bottom: 0,
  }
})
