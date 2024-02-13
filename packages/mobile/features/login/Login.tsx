import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { LoginNavigationProp } from '@mobile/features/login/LoginScreen';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
});

interface LoginProps {
  navigation: LoginNavigationProp;
}

const Login = ({ navigation }: LoginProps): React.JSX.Element => {
  const navigateToHome = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <View style={styles.button}>
      <Button onPress={navigateToHome} title={i18nString(Messages.Home)} />
    </View>
  );
};

export default Login;
