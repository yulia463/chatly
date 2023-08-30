import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type EmptyPageProps = {
  title: string;
  subtitle: string;
};

export const EmptyPage: FC<EmptyPageProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
  },
});
