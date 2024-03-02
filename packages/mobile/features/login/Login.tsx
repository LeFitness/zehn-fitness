import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import Text from '@mobile/common/text/Text';
import TextInput from '@mobile/common/textinput/TextInput';
import { LoginNavigationProp } from '@mobile/features/login/LoginScreen';
import useAppStore from '@mobile/stores/useAppStore';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  welcome: {
    id: 'app.login.welcome',
    defaultMessage: 'Welcome',
  },
  email: {
    id: 'app.login.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.login.password',
    defaultMessage: 'Password',
  },
  login: {
    id: 'app.login.loginText',
    defaultMessage: 'Login',
  },
});

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  loginField: {
    margin: 12,
    gap: 12,
  },
  banner: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 30,
  },
});

// Set up navigation here for future use
interface LoginProps {
  navigation?: LoginNavigationProp;
  setAuthToken: (authToken: string) => void;
}

const Login = ({ setAuthToken }: LoginProps): React.JSX.Element => {
  const intl = useIntl();

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
      <Text style={styles.banner}>{intl.formatMessage(messages.welcome)}</Text>
      <View style={styles.loginField}>
        <TextInput
          placeholder={intl.formatMessage(messages.email)}
          value={email}
          onChangeText={handleEmailChange}
          inputMode="email"
        />
        <TextInput
          placeholder={intl.formatMessage(messages.password)}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <Button onPress={handleLogin}>
          {intl.formatMessage(messages.login)}
        </Button>
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
