import React from 'react';
import CreateWorkout from '@mobile/features/configure_workout/CreateWorkoutScreen';
import ExerciseList from '@mobile/features/exercise_list/ExerciseListScreen';
import Home from '@mobile/features/home/HomeScreen';
import Index from '@mobile/features/index/IndexScreen';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import useAppStore from '@mobile/stores/useAppStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const currentWorkout = useAppStore(state => state.currentWorkout);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Index">
        <RootStack.Screen
          name="Index"
          component={Index}
          options={{
            title: currentWorkout?.name,
            headerStyle: {
              backgroundColor: '#34bdeb',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="CreateWorkout" component={CreateWorkout} />
        <RootStack.Screen name="ExerciseList" component={ExerciseList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
