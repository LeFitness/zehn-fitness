import type { Exercise } from '@mobile/types/exercises';
import { StateCreator } from 'zustand';

export interface WorkoutSlice {
  currentWorkout: Exercise | undefined;
  completedWorkouts: Exercise[];
  exercises: Exercise[];
  startWorkout: (exercise: Exercise) => void;
  completeWorkout: () => void;
  resetWorkout: () => void;
  setWorkoutTime: (workoutTime: number) => void;
  workoutTime: number;
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
  startWorkout: (exercise: Exercise) => set({ currentWorkout: exercise }),
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
  resetWorkout: () => set({ currentWorkout: undefined, workoutTime: 0 }),
  setWorkoutTime: (workoutTime: number) => set({ workoutTime: workoutTime }),
  workoutTime: 0,
});
