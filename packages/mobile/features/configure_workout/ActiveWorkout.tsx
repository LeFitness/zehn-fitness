import React from 'react';
import { View, Text } from 'react-native';
import useBoundStore from '@mobile/stores/useBoundStore';

const ActiveWorkout = () => {
  const currentWorkout = useBoundStore(state => state.currentWorkout);

  return (
    <View>
      <Text>Current Workout: {currentWorkout?.name}</Text>
    </View>
  );
};

export default ActiveWorkout;
