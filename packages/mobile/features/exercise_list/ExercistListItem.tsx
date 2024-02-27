import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '@mobile/common/text/Text';
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
