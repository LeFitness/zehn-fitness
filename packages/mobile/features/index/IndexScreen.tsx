import React from 'react';
import { Button, View } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'IndexScreen'
>;

interface ScreenProps {
  navigation: NavigationProp;
}

function IndexScreen({ navigation }: ScreenProps): React.JSX.Element {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('CreateWorkoutScreen')}
        title={i18nString(Messages.CreateWorkout)}
      />
      <Button
        onPress={() => navigation.navigate('WorkoutsListScreen')}
        title={i18nString(Messages.MyWorkouts)}
      />
    </View>
  );
}

export default IndexScreen;
