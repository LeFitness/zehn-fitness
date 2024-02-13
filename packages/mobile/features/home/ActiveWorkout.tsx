import React from 'react';
import { Text } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import type { Exercise } from '@mobile/types/exercises';

interface ActiveWorkoutProps {
  currentWorkout?: Exercise;
}

const ActiveWorkout = ({
  currentWorkout,
}: ActiveWorkoutProps): React.JSX.Element => {
  return (
    <Text>
      Current Workout: {currentWorkout?.name ?? i18nString(Messages.Idle)}
    </Text>
  );
};

export default ActiveWorkout;
