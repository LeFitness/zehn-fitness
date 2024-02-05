import React from 'react';
import { View } from 'react-native';
import ConfigureWorkout from '@mobile/features/configure_workout/ConfigureWorkout';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CreateWorkoutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateWorkout'
>;

export interface CreateWorkoutScreenProps {
  navigation: CreateWorkoutNavigationProp;
}

export default function CreateWorkoutScreen({
  navigation,
}: CreateWorkoutScreenProps): React.JSX.Element {
  return (
    <View>
      <ConfigureWorkout navigation={navigation} />
    </View>
  );
}
