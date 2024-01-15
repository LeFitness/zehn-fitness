import { createWorkoutSlice, WorkoutSlice } from '@mobile/stores/WorkoutSlice';
import { create } from 'zustand';

// other slice types will go here as a union type
type AppSlice = WorkoutSlice

const useBoundStore = create<AppSlice>()((...a) => ({
  ...createWorkoutSlice(...a),
}));

export default useBoundStore;