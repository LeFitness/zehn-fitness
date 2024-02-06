import React from 'react';
import ExerciseList from '@mobile/features/configure_workout/exercise_list/ExerciseList';
import useAppStore from '@mobile/stores/useAppStore';

const ExerciseListScreen = (): React.JSX.Element => {
  const exercises = useAppStore(state => state.exercises);

  return <ExerciseList exercises={exercises} />;
};

export default ExerciseListScreen;
