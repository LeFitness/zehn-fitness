import React from 'react';
import { FlatList } from 'react-native';
import ExerciseListItem from '@mobile/features/configure_workout/exercise_list/ExercistListItem';
import type { Exercise } from '@mobile/stores/workoutSlice';

interface Exercises {
  exercises: Exercise[];
}

const ExerciseList = ({ exercises }: Exercises) => {
  return (
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseListItem name={item.name} />}
    />
  );
};

export default ExerciseList;
