import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
    <>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
        style={styles.input}
      />
      <View style={styles.row}>
        <Button title="Start Workout" onPress={startWorkout} />
      </View>
    </>
  );
};

export default ConfigureWorkout;
