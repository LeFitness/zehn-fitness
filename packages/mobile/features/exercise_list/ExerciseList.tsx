import React from 'react';
import { FlatList } from 'react-native';
import ExerciseListItem from '@mobile/features/exercise_list/ExercistListItem';
import useAppStore from '@mobile/stores/useAppStore';
import type { ExercisesProps } from '@mobile/types/exercises';

const ExerciseList = ({ exercises }: ExercisesProps): React.JSX.Element => {
  return (
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseListItem exercise={item} />}
    />
  );
};

const ConnectedExerciseList = (): React.JSX.Element => {
  const exercises = useAppStore(state => state.exercises);
  return <ExerciseList exercises={exercises} />;
};

export default ConnectedExerciseList;
