import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import useBoundStore from '@mobile/stores/useBoundStore';
import { workoutSlice } from '@mobile/stores/workoutSlice';

function ConfigureWorkout() {
  const [workoutName, setWorkoutName] = useState('');
  const setCurrentWorkout = workoutSlice(state => state.startWorkout);

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const startWorkout = () => {
    setCurrentWorkout({ id: 1, name: workoutName });
  };

  return (
    <View>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <Button title="Start Workout" onPress={startWorkout} />
    </View>
  );
}

export default ConfigureWorkout;
