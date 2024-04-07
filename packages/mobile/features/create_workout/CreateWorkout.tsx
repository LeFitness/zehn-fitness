import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import TextInput from '@mobile/common/textinput/TextInput';
import Text from '@mobile/common/text/Text';
import type { Exercise } from '@mobile/types/exercises';
import { defineMessages, useIntl } from 'react-intl';
import useAppStore from '@mobile/stores/useAppStore';
import type { WorkoutSlice } from '@mobile/stores/workoutSlice';

const messages = defineMessages({
  startWorkout: {
    defaultMessage: 'Start Workout',
  },
  enterWorkoutName: {
    defaultMessage: 'Enter workout name',
  },
  stopWorkout: {
    defaultMessage: 'Stop Workout',
  },
  clearWorkout: {
    defaultMessage: 'Clear Workout',
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

interface CreateWorkoutProps {
  workoutSlice: WorkoutSlice;
}

const CreateWorkout = ({
  workoutSlice,
}: CreateWorkoutProps): React.JSX.Element => {
  const intl = useIntl();
  const [workoutName, setWorkoutName] = useState('');
  const [currentWorkoutTime, setCurrentWorkoutTime] = useState(0);
  const [workoutIsActive, setWorkoutIsActive] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const setCurrentWorkout = workoutSlice.startWorkout;

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const startWorkout = () => {
    setCurrentWorkout({ id: 1, name: workoutName });
    setWorkoutIsActive(true);
  };

  const stopWorkout = () => {
    setWorkoutIsActive(false);
  };

  const clearWorkout = () => {
    setWorkoutIsActive(false);
    setWorkoutName('');
    setCurrentWorkoutTime(0);
    workoutSlice.resetWorkout();
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return (
      (hours < 10 ? '0' + hours : hours) +
      ':' +
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (secs < 10 ? '0' + secs : secs)
    );
  };

  useEffect(() => {
    if (workoutIsActive) {
      intervalRef.current = setInterval(() => {
        setCurrentWorkoutTime(previousSeconds => previousSeconds + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [workoutIsActive, currentWorkoutTime]);

  console.log({ workoutIsActive, currentWorkoutTime });

  return (
    <View style={styles.configureWorkout}>
      <Text>{formatTime(currentWorkoutTime)}</Text>
      <TextInput
        placeholder={intl.formatMessage(messages.enterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
      />
      <Button onPress={startWorkout}>
        {intl.formatMessage(messages.startWorkout)}
      </Button>
      <Button onPress={stopWorkout}>
        {intl.formatMessage(messages.stopWorkout)}
      </Button>
      <Button onPress={clearWorkout}>
        {intl.formatMessage(messages.clearWorkout)}
      </Button>
    </View>
  );
};

const ConnectedCreateWorkout = (): React.JSX.Element => {
  const workoutSlice = useAppStore();

  return <CreateWorkout workoutSlice={workoutSlice} />;
};

export default ConnectedCreateWorkout;
