import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

function ConfigureWorkout() {
  const [workoutName, setWorkoutName] = useState('');

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter workout name"
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
    </View>
  );
}

export default ConfigureWorkout;
