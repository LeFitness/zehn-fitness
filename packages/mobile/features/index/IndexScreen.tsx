import React from 'react';
import { Button, View } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import ActiveWorkout from '@mobile/features/configure_workout/ActiveWorkout';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type IndexNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;

interface IndexScreenProps {
  navigation: IndexNavigationProp;
}

function IndexScreen({ navigation }: IndexScreenProps): React.JSX.Element {
  const handleOnPress = () => {
    navigation.navigate('CreateWorkout');
  };

  return (
    <View>
      <ActiveWorkout />
      <Button
        onPress={handleOnPress}
        title={i18nString(Messages.CreateWorkout)}
      />
    </View>
  );
}

export default IndexScreen;
