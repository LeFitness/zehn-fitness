import React from 'react';
import CreateWorkout from '@mobile/features/create_workout/CreateWorkoutScreen';
import ExerciseList from '@mobile/features/exercise_list/ExerciseListScreen';
import Home from '@mobile/features/home/HomeScreen';
import Profile from '@mobile/features/profile/ProfileScreen';
import { BottomTabsStackList } from '@mobile/navigation/NavigationConstants';
import { colors } from '@mobile/theme/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
        name="CreateWorkout"
        component={CreateWorkout}
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
