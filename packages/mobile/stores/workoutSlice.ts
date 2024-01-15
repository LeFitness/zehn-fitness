import { StateCreator } from 'zustand';

interface Exercise {
  id: number;
  name: string;
}

export interface WorkoutSlice {
  currentWorkout: Exercise | null;
  completedWorkouts: Exercise[];
  exercises: Exercise[];
  startWorkout: (exercise: Exercise) => void;
  completeWorkout: () => void;
  resetWorkout: () => void;
}

export const createWorkoutSlice: StateCreator<WorkoutSlice, [], [], WorkoutSlice> = (set => ({
  currentWorkout: null,
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
          currentWorkout: null,
        };
      }

      return state;
    }),
  resetWorkout: () => set({ currentWorkout: null }),
}));
