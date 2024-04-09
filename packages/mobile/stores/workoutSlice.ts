import type { Exercise, Workout } from '@mobile/types/exercises';
import { StateCreator } from 'zustand';

export interface WorkoutSlice {
  currentWorkout: Workout | undefined;
  completedWorkouts: Workout[];
  exercises: Exercise[];
  startWorkout: (workout: Workout) => void;
  completeWorkout: () => void;
  resetWorkout: () => void;
}

export const createWorkoutSlice: StateCreator<
  WorkoutSlice,
  [],
  [],
  WorkoutSlice
> = set => ({
  currentWorkout: undefined,
  completedWorkouts: [],
  exercises: [
    { id: 1, name: 'Bench Press' },
    { id: 2, name: 'Squat' },
    { id: 3, name: 'Deadlift' },
  ],
  startWorkout: (workout: Workout) => set({ currentWorkout: workout }),
  completeWorkout: () =>
    set(state => {
      if (state.currentWorkout) {
        return {
          completedWorkouts: [...state.completedWorkouts, state.currentWorkout],
          currentWorkout: undefined,
        };
      }

      return state;
    }),
  resetWorkout: () => set({ currentWorkout: undefined }),
});
