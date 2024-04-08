import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import { defineMessages, useIntl } from 'react-intl';
import type { WorkoutSlice } from '@mobile/stores/workoutSlice';
import { CreateWorkoutNavigationProp } from '@mobile/features/create_workout/CreateWorkoutScreen';

const messages = defineMessages({
  startWorkout: {
    defaultMessage: 'Start Workout',
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
  createWorkout: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    margin: 12,
  },
});

interface CreateWorkoutProps {
  navigation: CreateWorkoutNavigationProp;
}

const CreateWorkout = ({
  navigation,
}: CreateWorkoutProps): React.JSX.Element => {
  const intl = useIntl();

  const navigateToWorkout = () => {
    navigation.navigate('StartWorkout');
  };

  return (
    <View style={styles.createWorkout}>
      <Button onPress={navigateToWorkout}>
        {intl.formatMessage(messages.startWorkout)}
      </Button>
    </View>
  );
};

interface ConnectedCreateWorkoutProps {
  navigation: CreateWorkoutNavigationProp;
}

const ConnectedCreateWorkout = ({
  navigation,
}: ConnectedCreateWorkoutProps): React.JSX.Element => {
  return <CreateWorkout navigation={navigation} />;
};

export default ConnectedCreateWorkout;
