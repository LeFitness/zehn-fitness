import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});

interface ExerciseListItem {
  name: string;
}

const ExerciseListItem = ({ name }: ExerciseListItem) => {
  return <Text style={styles.item}>{name}</Text>;
};

export default ExerciseListItem;
