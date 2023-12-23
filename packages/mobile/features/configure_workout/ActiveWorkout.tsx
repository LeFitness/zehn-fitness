import React from 'react';
import { View, Text } from 'react-native';
import useBoundStore from '@mobile/stores/useBoundStore';
import { workoutSlice } from '@mobile/stores/workoutSlice';

const ActiveWorkout = () => {
  const currentWorkout = workoutSlice(state => state.currentWorkout);

  return (
    <View>
      <Text>Current Workout: {currentWorkout?.name}</Text>
    </View>
  );
};

export default ActiveWorkout;
