import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
  },
});
