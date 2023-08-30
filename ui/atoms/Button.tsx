import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { Color } from '../colors/Color';
import React from 'react';

type ButtonProps = {
  title: string;
  size: 's' | 'm';
} & TouchableOpacityProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const buttonSizeStyle = props.size === 's' ? styles.smallButton : styles.mediumButton;

  return (
    <TouchableOpacity {...props} style={[styles.button, buttonSizeStyle]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.BASE_BLUE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Color.BASE_WHITE,
    fontSize: 30,
  },
  smallButton: {
    width: 40,
    height: 40,
  },
  mediumButton: {
    width: 64,
    height: 64,
  },
});
