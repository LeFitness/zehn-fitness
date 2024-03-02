import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import TextInput from '@mobile/common/textinput/TextInput';
import type { Exercise } from '@mobile/types/exercises';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  startWorkout: {
    id: 'app.configureWorkout.startButton',
    defaultMessage: 'Start Workout',
  },
  enterWorkoutName: {
    id: 'app.configureWorkout.enterWorkoutName',
    defaultMessage: 'Enter workout name',
  },
});

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
  const intl = useIntl();

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const startWorkout = () => {
    setCurrentWorkout({ id: 1, name: workoutName });
  };

  return (
    <View style={styles.configureWorkout}>
      <TextInput
        placeholder={intl.formatMessage(messages.enterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <Button onPress={startWorkout}>
        {intl.formatMessage(messages.startWorkout)}
        {/* <FormattedMessage id={messages.startWorkout.defaultMessage} /> */}
      </Button>
    </View>
  );
};

export default ConfigureWorkout;
