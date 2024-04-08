import React from 'react';
import CreateWorkout from '@mobile/features/configure_workout/create_workout/CreateWorkoutScreen';
import StartWorkout from '@mobile/features/configure_workout/start_workout/StartWorkoutScreen';
import ExerciseList from '@mobile/features/exercise_list/ExerciseListScreen';
import Home from '@mobile/features/home/HomeScreen';
import Profile from '@mobile/features/profile/ProfileScreen';
import {
  BottomTabsStackList,
  CreateWorkoutStackList,
} from '@mobile/navigation/NavigationConstants';
import { colors } from '@mobile/theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateWorkoutStackScreen = () => {
  const CreateWorkoutStack =
    createNativeStackNavigator<CreateWorkoutStackList>();

  return (
    <CreateWorkoutStack.Navigator screenOptions={{ headerShown: false }}>
      <CreateWorkoutStack.Screen
        name="CreateWorkout"
        component={CreateWorkout}
      />
      <CreateWorkoutStack.Screen name="StartWorkout" component={StartWorkout} />
    </CreateWorkoutStack.Navigator>
  );
};

const BottomTabs = (): React.JSX.Element => {
  const NavStack = createBottomTabNavigator<BottomTabsStackList>();

  return (
    <NavStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.secondary },
        headerStyle: { backgroundColor: colors.secondary },
        headerTitleStyle: { color: colors.white },
      }}>
      <NavStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color={colors.white} />,
          tabBarLabelStyle: { color: colors.white },
        }}
      />
      <NavStack.Screen
        name="ConfigureWorkout"
        component={CreateWorkoutStackScreen}
        options={{
          tabBarLabel: 'Create Workout',
          headerTitle: 'Create Workout',
          tabBarIcon: () => (
            <Icon name="add-outline" size={30} color={colors.white} />
          ),
          tabBarLabelStyle: { color: colors.white },
        }}
      />
      <NavStack.Screen
        name="ExerciseList"
        component={ExerciseList}
        options={{
          tabBarLabel: 'Exercise List',
          headerTitle: 'Exercise List',
          tabBarIcon: () => (
            <Icon name="barbell-outline" size={24} color={colors.white} />
          ),
          tabBarLabelStyle: { color: colors.white },
        }}
      />
      <NavStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" size={24} color={colors.white} />
          ),
          tabBarLabelStyle: { color: colors.white },
        }}
      />
    </NavStack.Navigator>
  );
};

export default BottomTabs;
