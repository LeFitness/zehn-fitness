import React from 'react';
import Profile from '@mobile/features/profile/Profile';
import type { BottomTabsStackList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type ProfileNavigationProp = NativeStackNavigationProp<
  BottomTabsStackList,
  'Profile'
>;

interface ProfileScreenProps {
  navigation: ProfileNavigationProp;
}

const ProfileScreen = ({
  navigation,
}: ProfileScreenProps): React.JSX.Element => {
  return <Profile navigation={navigation} />;
};

export default ProfileScreen;
