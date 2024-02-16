import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActiveWorkout from '@mobile/features/home/ActiveWorkout';
import useAppStore from '@mobile/stores/useAppStore';
import type { Exercise } from '@mobile/types/exercises';

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
});

interface HomeProps {
  currentWorkout?: Exercise;
}

const Home = ({ currentWorkout }: HomeProps): React.JSX.Element => {
  return (
    <View style={styles.home}>
      <ActiveWorkout currentWorkout={currentWorkout} />
    </View>
  );
};

const ConnectedHome = (): React.JSX.Element => {
  const currentWorkout = useAppStore(state => state.currentWorkout);

  return <Home currentWorkout={currentWorkout} />;
};

export default ConnectedHome;
