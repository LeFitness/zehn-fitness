import { workoutSlice, WorkoutStore } from '@mobile/stores/workoutSlice';
import { create } from 'zustand';

export interface StoreState {
  workoutSlice: WorkoutStore;
}

const useBoundStore = create<StoreState>(set => ({
  workoutSlice: workoutSlice(set),
}));

export default useBoundStore;
