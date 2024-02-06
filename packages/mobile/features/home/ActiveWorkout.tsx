import React from 'react';
import { Text } from 'react-native';
import useAppStore from '@mobile/stores/useAppStore';

const ActiveWorkout = () => {
  const currentWorkout = useAppStore(state => state.currentWorkout);

  return <Text>Current Workout: {currentWorkout?.name}</Text>;
};

export default ActiveWorkout;
