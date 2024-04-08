import React from 'react';
import StartWorkout from '@mobile/features/configure_workout/start_workout/StartWorkout';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateWorkoutStackList } from '@mobile/navigation/NavigationConstants';

export type StartWorkoutNavigationProp = NativeStackNavigationProp<
  CreateWorkoutStackList,
  'StartWorkout'
>;

interface StartWorkoutScreenProps {
  navigation: StartWorkoutNavigationProp;
}

const StartWorkoutScreen = ({
  navigation,
}: StartWorkoutScreenProps): React.JSX.Element => {
  return <StartWorkout navigation={navigation} />;
};

export default StartWorkoutScreen;
