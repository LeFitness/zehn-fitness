import React from 'react';
import { FlatList } from 'react-native';
import ExerciseListItem from '@mobile/features/exercise_list/ExercistListItem';
import useAppStore from '@mobile/stores/useAppStore';
import type { Exercise } from '@mobile/types/exercises';
import exerciseList from './exercise_list.json';


interface ExercisesProps {
  exercises: Exercise[];
}

const ExerciseList = ({ exercises }: ExercisesProps): React.JSX.Element => {
  const [query, setQuery] = React.useState('');
  const filteredExercises = React.useMemo(() => {
    return exercises.filter((exercise) =>
      exercise.name.includes(query.toLowerCase())
    );
  }, [exercises, query])
  return (
    <FlatList
      data={filteredExercises}
      renderItem={({ item }) => <ExerciseListItem key={item.id} exercise={item} />}
    />
  );
};

const ConnectedExerciseList = (): React.JSX.Element => {  
  return <ExerciseList exercises={exerciseList} />;
};

export default ConnectedExerciseList;
