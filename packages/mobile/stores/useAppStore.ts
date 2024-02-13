import {
  createAuthenticationSlice,
  AuthenticationSlice,
} from '@mobile/stores/authenticationSlice';
import { createWorkoutSlice, WorkoutSlice } from '@mobile/stores/workoutSlice';
import { create } from 'zustand';

const useAppStore = create<WorkoutSlice & AuthenticationSlice>()((...a) => ({
  ...createWorkoutSlice(...a),
  ...createAuthenticationSlice(...a),
}));

export default useAppStore;
