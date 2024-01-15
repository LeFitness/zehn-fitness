import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { IndexScreenProps } from '@mobile/features/index/IndexScreen';
import useBoundStore from '@mobile/stores/useBoundStore';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function ConfigureWorkout({ navigation }: IndexScreenProps) {
  const [workoutName, setWorkoutName] = useState('');
  const setCurrentWorkout = useBoundStore(state => state.startWorkout);

  const handleWorkoutNameChange = (text: string) => {
    setWorkoutName(text);
  };

  const startWorkout = () => {
    setCurrentWorkout({ id: 1, name: workoutName });
  };

  const handleOnPress = () => {
    navigation.navigate('ExerciseList');
  };

  return (
    <View>
      <TextInput
        placeholder={i18nString(Messages.EnterWorkoutName)}
        value={workoutName}
        onChangeText={handleWorkoutNameChange}
        style={styles.input}
      />
      <View style={styles.row}>
        <Button
          onPress={handleOnPress}
          title={i18nString(Messages.ExerciseList)}
        />
        <Button title="Start Workout" onPress={startWorkout} />
      </View>
    </View>
  );
}

export default ConfigureWorkout;
