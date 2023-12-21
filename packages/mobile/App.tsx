import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './features/index/IndexScreen';
import { RootStackParamList } from './navigation/NavigationConstants';
import CreateWorkout from './features/configure_workout/CreateWorkoutScreen';

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Index">
        <RootStack.Screen name={'Index'} component={Index} />
        <RootStack.Screen name={'CreateWorkout'} component={CreateWorkout} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
