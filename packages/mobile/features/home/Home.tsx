import React from 'react';
import ActiveWorkout from '@mobile/features/home/ActiveWorkout';
import useAppStore from '@mobile/stores/useAppStore';
import type { Exercise } from '@mobile/stores/workoutSlice';

interface HomeProps {
  currentWorkout?: Exercise;
}

const Home = ({ currentWorkout }: HomeProps): React.JSX.Element => {
  return <ActiveWorkout currentWorkout={currentWorkout} />;
};

const ConnectedHome = (): React.JSX.Element => {
  const currentWorkout = useAppStore(state => state.currentWorkout);

  return <Home currentWorkout={currentWorkout} />;
};

export default ConnectedHome;
