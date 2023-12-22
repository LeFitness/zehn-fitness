import React from 'react';
import { View } from 'react-native';
import ConfigureWorkout from '@mobile/features/configure_workout/ConfigureWorkout';
import { WorkoutsContext } from '@mobile/state/WorkoutsContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateWorkoutScreen'
>;

interface ScreenProps {
  navigation: NavigationProp;
}

export default function CreateWorkoutScreen({
  navigation,
}: ScreenProps): React.JSX.Element {
  const workoutsContext = React.useContext(WorkoutsContext);
  const onSaveWorkout = (workoutName: string) => {
    workoutsContext.createWorkout(workoutName);
    navigation.replace('WorkoutsListScreen');
  };

  return (
    <View>
      <ConfigureWorkout onSaveWorkout={onSaveWorkout} />
    </View>
  );
}
