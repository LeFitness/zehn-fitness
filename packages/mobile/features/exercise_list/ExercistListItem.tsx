import React from 'react';
import { StyleSheet, Text } from 'react-native';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});

interface ExerciseListItemProps {
  exercise: Exercise;
}

const ExerciseListItem = ({
  exercise,
}: ExerciseListItemProps): React.JSX.Element => {
  return <Text style={styles.item}>{exercise.name}</Text>;
};

export default ExerciseListItem;
