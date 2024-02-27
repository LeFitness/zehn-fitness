import React from 'react';
import { StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import Text from '@mobile/common/text/Text';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  activeWorkout: {
    fontSize: 30,
  },
});

interface ActiveWorkoutProps {
  currentWorkout?: Exercise;
}

const ActiveWorkout = ({
  currentWorkout,
}: ActiveWorkoutProps): React.JSX.Element => {
  return (
    <Text style={styles.activeWorkout}>
      Current Workout: {currentWorkout?.name ?? i18nString(Messages.Idle)}
    </Text>
  );
};

export default ActiveWorkout;
