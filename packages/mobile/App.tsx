import React from 'react';
import CreateWorkout from '@mobile/features/configure_workout/CreateWorkoutScreen';
import ExerciseList from '@mobile/features/configure_workout/ExerciseList';
import Index from '@mobile/features/index/IndexScreen';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import useBoundStore from '@mobile/stores/useBoundStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const currentWorkout = useBoundStore(state => state.currentWorkout);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Index">
        <RootStack.Screen
          name={'Index'}
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
        <RootStack.Screen name={'CreateWorkout'} component={CreateWorkout} />
        <RootStack.Screen name={'ExerciseList'} component={ExerciseList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
