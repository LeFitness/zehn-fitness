import i18nString, { Messages } from '@common/i18n';
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
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
    </View>
  );
}

export default ConfigureWorkout;
