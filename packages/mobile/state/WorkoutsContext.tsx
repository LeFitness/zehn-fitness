import { createContext, useState, ReactNode } from 'react';

interface Workout {
  id: number;
  name: string;
}

interface WorkoutsContextType {
  workouts: Workout[];
  fetchWorkouts: () => void;
  createWorkout: (workoutName: string) => void;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({
  workouts: [],
  fetchWorkouts: () => {},
  createWorkout: (workoutName: string) => {},
});

interface WorkoutsProviderProps {
  children?: React.JSX.Element | ReactNode | ReactNode[] | undefined;
}

export const WorkoutsProvider = ({ children }: WorkoutsProviderProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const fetchWorkouts = () => {
    console.warn('fetchWorkouts not implemented');
  };

  const createWorkout = (workoutName: string) => {
    const workoutsCount = workouts.length;
    setWorkouts([...workouts, { id: workoutsCount + 1, name: workoutName }]);
  };

  return (
    <WorkoutsContext.Provider
      value={{ workouts, fetchWorkouts, createWorkout }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
