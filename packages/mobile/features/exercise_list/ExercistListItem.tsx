import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});

interface ExerciseListItemProps {
  name: string;
}

const ExerciseListItem = ({
  name,
}: ExerciseListItemProps): React.JSX.Element => {
  return <Text style={styles.item}>{name}</Text>;
};

export default ExerciseListItem;
