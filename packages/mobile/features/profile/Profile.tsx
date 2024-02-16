import React from 'react';
import { View, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import Button from '@mobile/common/button/Button';
import { ProfileNavigationProp } from '@mobile/features/profile/ProfileScreen';
import useAppStore from '@mobile/stores/useAppStore';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    margin: 12,
  },
});

// Set up navigation here for future use
interface ProfileProps {
  navigation: ProfileNavigationProp;
  resetAuth: () => void;
}

const Profile = ({
  navigation,
  resetAuth,
}: ProfileProps): React.JSX.Element => {
  const handleLogout = () => {
    resetAuth();
  };

  return (
    <View style={styles.root}>
      <Button onPress={handleLogout}>{i18nString(Messages.SignOut)}</Button>
    </View>
  );
};

interface ConnectedProfileProps {
  navigation: ProfileNavigationProp;
}

const ConnectedProfile = ({
  navigation,
}: ConnectedProfileProps): React.JSX.Element => {
  const resetAuth = useAppStore(state => state.resetAuth);

  return <Profile navigation={navigation} resetAuth={resetAuth} />;
};

export default ConnectedProfile;
