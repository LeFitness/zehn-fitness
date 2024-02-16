import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import Button from '@mobile/common/button/Button';
import Text from '@mobile/common/text/Text';
import TextInput from '@mobile/common/textinput/TextInput';
import { LoginNavigationProp } from '@mobile/features/login/LoginScreen';
import useAppStore from '@mobile/stores/useAppStore';

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  banner: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 30,
  },
});

// Set up navigation here for future use
interface LoginProps {
  navigation: LoginNavigationProp;
  setAuthToken: (authToken: string) => void;
}

const Login = ({ navigation, setAuthToken }: LoginProps): React.JSX.Element => {
  const handleLogin = () => {
    setAuthToken('123456789');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.login}>
      <Text style={styles.banner}>{i18nString(Messages.Welcome)}</Text>
      <TextInput
        placeholder={i18nString(Messages.Email)}
        value={email}
        onChangeText={handleEmailChange}
        inputMode="email"
      />
      <TextInput
        placeholder={i18nString(Messages.Password)}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button onPress={handleLogin}>{i18nString(Messages.Login)}</Button>
    </View>
  );
};

interface ConnectedLoginProps {
  navigation: LoginNavigationProp;
}

const ConnectedLogin = ({
  navigation,
}: ConnectedLoginProps): React.JSX.Element => {
  const setAuthToken = useAppStore(state => state.setAuthToken);

  return <Login navigation={navigation} setAuthToken={setAuthToken} />;
};

export default ConnectedLogin;
