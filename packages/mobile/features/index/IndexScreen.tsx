import React from 'react';
import { Button, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/NavigationConstants';
import i18nString, { Messages } from '@common/i18n';

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
      <Button
        onPress={handleOnPress}
        title={i18nString(Messages.CreateWorkout)}
      />
    </View>
  );
}

export default IndexScreen;
