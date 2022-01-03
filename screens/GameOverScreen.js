import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import BodyText from '../components/BodyText';

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <BodyText>The Game Is Over!</BodyText>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number to guess: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
