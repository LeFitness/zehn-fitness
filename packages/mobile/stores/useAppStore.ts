import { createWorkoutSlice, WorkoutSlice } from '@mobile/stores/workoutSlice';
import { create } from 'zustand';

// other slice types will go here as a union type
type AppSlice = WorkoutSlice;

const useAppStore = create<AppSlice>()((...a) => ({
  ...createWorkoutSlice(...a),
}));

export default useAppStore;
