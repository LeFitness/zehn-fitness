import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { ProfileNavigationProp } from '@mobile/features/profile/ProfileScreen';
import useAppStore from '@mobile/stores/useAppStore';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
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
      <Button onPress={handleLogout} title={i18nString(Messages.SignOut)} />
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
