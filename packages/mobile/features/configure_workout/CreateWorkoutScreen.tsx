import React from 'react';
import { View } from 'react-native';
import ConfigureWorkout from '@mobile/features/configure_workout/ConfigureWorkout';
import { IndexScreenProps } from '@mobile/features/index/IndexScreen';

export default function CreateWorkoutScreen({
  navigation,
}: IndexScreenProps): React.JSX.Element {
  return (
    <View>
      <ConfigureWorkout navigation={navigation} />
    </View>
  );
}
