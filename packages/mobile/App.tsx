import React from 'react';
import Login from '@mobile/features/login/LoginScreen';
import BottomTabs from '@mobile/navigation/BottomTabs';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  const isAuthenticated = false;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <RootStack.Screen name="BottomTabs" component={BottomTabs} />
        ) : (
          <RootStack.Screen name="Login" component={Login} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
