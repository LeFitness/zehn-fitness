import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/NavigationConstants';

type IndexNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;

interface IndexScreenProps {
  navigation: IndexNavigationProp;
}

function Index({ navigation }: IndexScreenProps): React.JSX.Element {
  const handleOnPress = (v: string) => {
    navigation.navigate('CreateWorkout', { testProp: v });
  };

  const [inputValue, setInputValue] = useState('');

  return (
    <View>
      <Button
        onPress={() => handleOnPress(inputValue)}
        title="Create Workout"
      />
      <TextInput
        value={inputValue}
        onChange={event => setInputValue(event.nativeEvent.text)}
      />
    </View>
  );
}

export default Index;
