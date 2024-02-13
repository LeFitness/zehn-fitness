import React from 'react';
import ConfigureWorkout from '@mobile/features/configure_workout/ConfigureWorkout';
import type { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import useAppStore from '@mobile/stores/useAppStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CreateWorkoutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateWorkout'
>;

interface CreateWorkoutScreenProps {
  navigation: CreateWorkoutNavigationProp;
}

const CreateWorkoutScreen = ({
  navigation,
}: CreateWorkoutScreenProps): React.JSX.Element => {
  const setCurrentWorkout = useAppStore(state => state.startWorkout);

  return (
    <ConfigureWorkout
      navigation={navigation}
      setCurrentWorkout={setCurrentWorkout}
    />
  );
};

export default CreateWorkoutScreen;
