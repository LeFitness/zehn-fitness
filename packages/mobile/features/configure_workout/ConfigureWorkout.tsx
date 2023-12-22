import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import i18nString, { Messages } from '@common/i18n';

type OnSaveWorkout = (workoutName: string) => void;

interface ConfigureWorkoutProps {
  onSaveWorkout: OnSaveWorkout;
}

function ConfigureWorkout({ onSaveWorkout }: ConfigureWorkoutProps) {
  const [workoutName, setWorkoutName] = useState('');

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const onSavePress = () => {
    onSaveWorkout(workoutName);
  };

  return (
    <View>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <Button onPress={onSavePress} title={i18nString(Messages.Save)} />
    </View>
  );
}

export default ConfigureWorkout;
