import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, View, Text } from 'react-native';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WorkoutsContext } from '@mobile/state/WorkoutsContext';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'WorkoutsListScreen'
>;

interface ScreenProps {
  navigation: NavigationProp;
}

interface WorkoutListItem {
  name: string;
}

interface WorkoutsListProps {
  workouts: WorkoutListItem[];
}

function WorkoutsList({ workouts }: WorkoutsListProps): React.JSX.Element {
  const renderItem = ({
    item: workout,
  }: ListRenderItemInfo<WorkoutListItem>) => {
    return <Text>{workout.name}</Text>;
  };

  return <FlatList data={workouts} renderItem={renderItem} />;
}

function WorkoutsListScreen({ navigation }: ScreenProps): React.JSX.Element {
  const workoutsContext = React.useContext(WorkoutsContext);
  return <WorkoutsList workouts={workoutsContext.workouts} />;
}

export default WorkoutsListScreen;
