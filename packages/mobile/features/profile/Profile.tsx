import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@mobile/common/button/Button';
import { ProfileNavigationProp } from '@mobile/features/profile/ProfileScreen';
import useAppStore from '@mobile/stores/useAppStore';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  signOut: {
    defaultMessage: 'Sign Out',
  },
});

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
  navigation?: ProfileNavigationProp;
  resetAuth: () => void;
}

const Profile = ({ resetAuth }: ProfileProps): React.JSX.Element => {
  const intl = useIntl();

  const handleLogout = () => {
    resetAuth();
  };

  return (
    <View style={styles.root}>
      <Button onPress={handleLogout}>
        {intl.formatMessage(messages.signOut)}
      </Button>
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
