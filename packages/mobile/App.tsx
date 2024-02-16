import React from 'react';
import Login from '@mobile/features/login/LoginScreen';
import BottomTabs from '@mobile/navigation/BottomTabs';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import useAppStore from '@mobile/stores/useAppStore';
import { colors } from '@mobile/theme/colors';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.darkTheme,
  },
};

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const isAuthenticated = useAppStore(state => state.authToken);

  return (
    <NavigationContainer theme={appTheme}>
      <RootStack.Navigator
        initialRouteName={isAuthenticated ? 'BottomTabs' : 'Login'}
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
