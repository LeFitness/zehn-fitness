import React from 'react';
import CreateWorkout from '@mobile/features/configure_workout/create_workout/CreateWorkout';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateWorkoutStackList } from '@mobile/navigation/NavigationConstants';

export type CreateWorkoutNavigationProp = NativeStackNavigationProp<
  CreateWorkoutStackList,
  'CreateWorkout'
>;

interface CreateWorkoutScreenProps {
  navigation: CreateWorkoutNavigationProp;
}

const CreateWorkoutScreen = ({
  navigation,
}: CreateWorkoutScreenProps): React.JSX.Element => {
  return <CreateWorkout navigation={navigation} />;
};

export default CreateWorkoutScreen;
