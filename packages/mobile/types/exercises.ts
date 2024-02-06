import { Exercise } from '@mobile/stores/workoutSlice';

export interface CurrentWorkoutProps {
  currentWorkout?: Exercise;
}

export interface ExercisesProps {
  exercises: Exercise[];
}
