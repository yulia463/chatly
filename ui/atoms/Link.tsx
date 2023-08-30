import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { Color } from '../colors/Color';
import React from 'react';

type LinkProps = {
  title: string;
} & TouchableOpacityProps;

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.navigationLink}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navigationLink: {
    borderRadius: 50,
    gap: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Color.BASE_BLUE,
  }
});
