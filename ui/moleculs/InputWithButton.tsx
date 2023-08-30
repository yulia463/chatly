import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Button } from '../atoms/Button';
import { Color } from '../colors/Color';

type InputWithButtonProps = {
  // styles?: {
  //   position: string;
  //   bottom: number | string;
  // }
  value: string;
  onChangeText: (value: string) => void;
  onSend: () => void;
} & TextInputProps;

export const InputWithButton: FC<InputWithButtonProps> = (props) => {
  // const customStyle = props.styles ? props.styles : {};
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={"Type a message..."}
        onLayout={props?.onLayout}
      />
      <Button title={'+'} size={'s'} onPress={props.onSend}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Color.BASE_WHITE,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Color.BASE_GREY,
    backgroundColor: Color.BASE_WHITE,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
});
