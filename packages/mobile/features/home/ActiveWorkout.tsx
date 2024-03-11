import React from 'react';
import { StyleSheet } from 'react-native';
import globalMessages from '@mobile/i18n/globalMessages';
import Text from '@mobile/common/text/Text';
import type { Exercise } from '@mobile/types/exercises';
import { useIntl } from 'react-intl';

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
  const intl = useIntl();

  return (
    <Text style={styles.activeWorkout}>
      Current Workout:{' '}
      {currentWorkout?.name ?? intl.formatMessage(globalMessages.idle)}
    </Text>
  );
};

export default ActiveWorkout;
