import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { LoginNavigationProp } from '@mobile/features/login/LoginScreen';
import useAppStore from '@mobile/stores/useAppStore';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.root}>
      <TextInput
        placeholder={i18nString(Messages.Username)}
        value={username}
        onChangeText={handleUsernameChange}
        style={styles.input}
      />
      <TextInput
        placeholder={i18nString(Messages.Password)}
        value={password}
        onChangeText={handlePasswordChange}
        style={styles.input}
      />
      <Button onPress={handleLogin} title={i18nString(Messages.Login)} />
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
