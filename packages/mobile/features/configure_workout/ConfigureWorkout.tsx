import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import Button from '@mobile/common/button/Button';
import TextInput from '@mobile/common/textinput/TextInput';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    <View>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <View style={styles.row}>
        <Button onPress={startWorkout}>
          {i18nString(Messages.StartWorkout)}
        </Button>
      </View>
    </View>
  );
};

export default ConfigureWorkout;
