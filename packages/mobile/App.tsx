import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import testFunction from '@common/components/testFunction';
import { mobileFunction } from '@mobile/mobileFunction';

const handleOnPress = () => {
  console.log('Button pressed');
  testFunction();
  mobileFunction();
};

const Home = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.textTitle}>Home</Text>
      <Pressable onPress={handleOnPress}>
        <View style={{ backgroundColor: 'blue' }}>
          <Text style={{ color: 'white' }}>Pressable Text</Text>
        </View>
      </Pressable>
      {/* <Button onPress={handleOnPress} title="Button Text" /> */}
    </View>
  );
};

const Details = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.textTitle}>Details Screen</Text>
    </View>
  );
};

const App = (): React.JSX.Element => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Index">
        <RootStack.Screen name={'Index'} component={IndexScreen} />
        <RootStack.Screen
          name={'CreateWorkout'}
          component={CreateWorkoutScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
