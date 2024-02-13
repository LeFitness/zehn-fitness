import React from 'react';
import Login from '@mobile/features/login/Login';
import type { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginNavigationProp;
}

const LoginScreen = ({ navigation }: LoginScreenProps): React.JSX.Element => {
  return <Login navigation={navigation} />;
};

export default LoginScreen;
