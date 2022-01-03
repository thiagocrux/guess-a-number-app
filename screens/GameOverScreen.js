import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

export default function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over!</TitleText>
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
