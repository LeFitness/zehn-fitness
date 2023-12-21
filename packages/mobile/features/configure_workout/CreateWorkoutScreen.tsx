import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfigureWorkout from './ConfigureWorkout';

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default function CreateWorkoutScreen(): React.JSX.Element {
  return (
    <View>
      <Text style={styles.textTitle}></Text>
      <ConfigureWorkout />
    </View>
  );
}
