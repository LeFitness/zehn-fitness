import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import TextInput from '@mobile/common/textinput/TextInput';
import Text from '@mobile/common/text/Text';
import { defineMessages, useIntl } from 'react-intl';
import useAppStore from '@mobile/stores/useAppStore';
import type { WorkoutSlice } from '@mobile/stores/workoutSlice';
import { StartWorkoutNavigationProp } from '@mobile/features/start_workout/StartWorkoutScreen';

const messages = defineMessages({
  finishWorkout: {
    defaultMessage: 'Finish',
  },
  enterWorkoutName: {
    defaultMessage: 'Enter workout name',
  },
  resumeWorkout: {
    defaultMessage: 'Resume Workout',
  },
  pauseWorkout: {
    defaultMessage: 'Pause Workout',
  },
  cancelWorkout: {
    defaultMessage: 'Cancel Workout',
  },
});

const styles = StyleSheet.create({
  StartWorkout: {
    display: 'flex',
    height: '100%',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  workoutConfig: {
    display: 'flex',
    height: '100%',
    margin: 12,
    gap: 12,
    justifyContent: 'center',
  },
});

interface StartWorkoutProps {
  navigation: StartWorkoutNavigationProp;
  workoutSlice: WorkoutSlice;
}

const StartWorkout = ({
  navigation,
  workoutSlice,
}: StartWorkoutProps): React.JSX.Element => {
  const intl = useIntl();
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const [workoutIsActive, setWorkoutIsActive] = useState(true);
  const {
    startWorkout: setCurrentWorkout,
    currentWorkout,
    setWorkoutTime: setCurrentWorkoutTime,
    workoutTime: currentWorkoutTime,
  } = workoutSlice;
  const currentWorkoutName = currentWorkout?.name ?? '';

  const handleWorkoutNameChange = (text: string) => {
    setCurrentWorkout({ id: 1, name: text });
  };

  const finishWorkout = () => {
    if (currentWorkoutName) {
      setWorkoutIsActive(false);
      workoutSlice.resetWorkout();
      navigation.navigate('CreateWorkout');
    }
  };

  const pauseWorkout = () => {
    setWorkoutIsActive(!workoutIsActive);
  };

  const clearWorkout = () => {
    setWorkoutIsActive(false);
    workoutSlice.resetWorkout();
    navigation.navigate('CreateWorkout');
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
        const secondsElapsed = currentWorkoutTime + 1;
        setCurrentWorkoutTime(secondsElapsed);
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

  return (
    <View style={styles.StartWorkout}>
      <View style={styles.topRow}>
        <Text>{formatTime(currentWorkoutTime)}</Text>
        <Button onPress={finishWorkout}>
          {intl.formatMessage(messages.finishWorkout)}
        </Button>
      </View>
      <View style={styles.workoutConfig}>
        <TextInput
          placeholder={intl.formatMessage(messages.enterWorkoutName)}
          value={currentWorkoutName}
          onChangeText={handleWorkoutNameChange}
        />
        <Button onPress={pauseWorkout}>
          {workoutIsActive
            ? intl.formatMessage(messages.pauseWorkout)
            : intl.formatMessage(messages.resumeWorkout)}
        </Button>
        <Button onPress={clearWorkout}>
          {intl.formatMessage(messages.cancelWorkout)}
        </Button>
      </View>
    </View>
  );
};

interface ConnectedStartWorkoutProps {
  navigation: StartWorkoutNavigationProp;
}

const ConnectedStartWorkout = ({
  navigation,
}: ConnectedStartWorkoutProps): React.JSX.Element => {
  const workoutSlice = useAppStore();

  return <StartWorkout navigation={navigation} workoutSlice={workoutSlice} />;
};

export default ConnectedStartWorkout;
