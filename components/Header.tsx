import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../redux/store';
import { Chat } from '../redux/types/chatState';
import { Link } from '../ui/atoms/Link';
import { editChatName, setCurrentChat } from '../redux/chatsSlice';
import { EditableChatPreview } from '../ui/moleculs/EditableChatPreview';

export const Header = () => {
  const dispatch = useDispatch();
  const currentChat = useSelector<AppRootStateType, Chat | null>((state) => state.chats.currentChat);

  const handleArrowBackPress = () => {
    dispatch(setCurrentChat(null));
  }

  const handleEditChatName = (newChatName: string) => {
    dispatch(editChatName({ newChatName: newChatName, chatId:  currentChat?.id || '' }))
  }

  return (
    <View style={styles.header}>
      {currentChat && (
        <View style={styles.buttonBlock}>
          <Link onPress={handleArrowBackPress} title={'❮'}/>
          <EditableChatPreview
            onEditChatName={handleEditChatName}
            avatar={currentChat.sender.avatarSrc}
            username={currentChat.sender.name}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonBlock: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 1,
    alignItems: 'center',
    paddingLeft: 10,
  }
})

