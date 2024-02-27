import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import Button from '@mobile/common/button/Button';
import TextInput from '@mobile/common/textinput/TextInput';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  configureWorkout: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    margin: 12,
    gap: 12,
  },
});

interface ConfigureWorkoutProps {
  setCurrentWorkout: (exercise: Exercise) => void;
}

const ConfigureWorkout = ({
  setCurrentWorkout,
}: ConfigureWorkoutProps): React.JSX.Element => {
  const [workoutName, setWorkoutName] = useState('');

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const startWorkout = () => {
    setCurrentWorkout({ id: 1, name: workoutName });
  };

  return (
    <View style={styles.configureWorkout}>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <Button onPress={startWorkout}>
        {i18nString(Messages.StartWorkout)}
      </Button>
    </View>
  );
};

export default ConfigureWorkout;
