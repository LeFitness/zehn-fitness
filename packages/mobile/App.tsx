import React from 'react';
import CreateWorkoutScreen from '@mobile/features/configure_workout/CreateWorkoutScreen';
import IndexScreen from '@mobile/features/index/IndexScreen';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutsListScreen from './features/workouts_list/WorkoutsListScreen';
import { WorkoutsProvider } from './state/WorkoutsContext';

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <WorkoutsProvider>
        <RootStack.Navigator initialRouteName="IndexScreen">
          <RootStack.Screen name={'IndexScreen'} component={IndexScreen} />
          <RootStack.Screen
            name={'CreateWorkoutScreen'}
            component={CreateWorkoutScreen}
          />
          <RootStack.Screen
            name={'WorkoutsListScreen'}
            component={WorkoutsListScreen}
          />
        </RootStack.Navigator>
      </WorkoutsProvider>
    </NavigationContainer>
  );
};

export default App;
