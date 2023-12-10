import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

interface ScreenProps {
  navigation: unknown,
}

function Home({navigation}: ScreenProps): React.JSX.Element {
  return (
    <View>
      <Text style={styles.textTitle}>Home</Text>
    </View>
  );
};

function Details({navigation}: ScreenProps): React.JSX.Element {
  return (
    <View>
      <Text style={styles.textTitle}>Details Screen</Text>
    </View>
  );
};

function App(): React.JSX.Element {
  const Stack =  createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Details'
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
