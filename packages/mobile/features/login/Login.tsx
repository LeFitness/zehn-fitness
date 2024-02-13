import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput, Text } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { LoginNavigationProp } from '@mobile/features/login/LoginScreen';
import useAppStore from '@mobile/stores/useAppStore';
import { colors } from '@mobile/theme/colors';

const styles = StyleSheet.create({
  banner: {
    marginBottom: 20,
    color: colors.palette.primary,
    textAlign: 'center',
    fontSize: 30,
  },
  login: {
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View>
      <View style={styles.login}>
        <Text style={styles.banner}>{i18nString(Messages.Welcome)}</Text>
        <TextInput
          placeholder={i18nString(Messages.Email)}
          value={email}
          onChangeText={handleEmailChange}
          style={styles.input}
          inputMode="email"
        />
        <TextInput
          placeholder={i18nString(Messages.Password)}
          value={password}
          onChangeText={handlePasswordChange}
          style={styles.input}
        />
        <Button onPress={handleLogin} title={i18nString(Messages.Login)} />
      </View>
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
