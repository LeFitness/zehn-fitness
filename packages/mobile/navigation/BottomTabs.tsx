import React from 'react';
import CreateWorkout from '@mobile/features/configure_workout/CreateWorkoutScreen';
import ExerciseList from '@mobile/features/exercise_list/ExerciseListScreen';
import Home from '@mobile/features/home/HomeScreen';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabs = (): React.JSX.Element => {
  const NavStack = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavStack.Navigator>
      <NavStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color="#4F8EF7" />,
        }}
      />
      <NavStack.Screen
        name="CreateWorkout"
        component={CreateWorkout}
        options={{
          tabBarLabel: 'Create Workout',
          headerTitle: 'Create Workout',
          tabBarIcon: () => (
            <Icon name="add-outline" size={30} color="#4F8EF7" />
          ),
        }}
      />
      <NavStack.Screen
        name="ExerciseList"
        component={ExerciseList}
        options={{
          tabBarLabel: 'Exercise List',
          headerTitle: 'Exercise List',
          tabBarIcon: () => (
            <Icon name="barbell-outline" size={24} color="#4F8EF7" />
          ),
        }}
      />
    </NavStack.Navigator>
  );
};

export default BottomTabs;
