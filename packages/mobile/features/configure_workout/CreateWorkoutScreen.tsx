import React from 'react';
import ConfigureWorkout from '@mobile/features/configure_workout/ConfigureWorkout';
import useAppStore from '@mobile/stores/useAppStore';

const CreateWorkoutScreen = (): React.JSX.Element => {
  const setCurrentWorkout = useAppStore(state => state.startWorkout);

  return <ConfigureWorkout setCurrentWorkout={setCurrentWorkout} />;
};

export default CreateWorkoutScreen;
