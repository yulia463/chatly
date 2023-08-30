import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import { Link } from '../atoms/Link';
import { Color } from '../colors/Color';
import { InputWithButton } from './InputWithButton';

type EditableChatPreviewProps = {
  avatar: string;
  username: string;
  onEditChatName: (newChatName: string) => void;
}

export const EditableChatPreview: React.FC<EditableChatPreviewProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentChatName, setCurrentChatName] = useState(props.username);

  const handleSendButtonPress = () => {
    props.onEditChatName(currentChatName);
    setIsModalOpen(false);
  }


  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: props.avatar }}/>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.username}>{props.username}</Text>
        <Link title={'Edit'} onPress={() => setIsModalOpen(!isModalOpen)}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Edit chat name</Text>
            <InputWithButton value={currentChatName} onChangeText={setCurrentChatName} onSend={handleSendButtonPress}/>
            <Link title={'Close'} onPress={() => setIsModalOpen(false)}/>
          </View>
        </View>
      </Modal>
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
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BASE_GREY,
  },
  modalContent: {
    backgroundColor: Color.BASE_WHITE,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
})
