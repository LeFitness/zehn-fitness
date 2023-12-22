import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { workoutSlice } from '@mobile/stores/workoutSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const ExerciseList = () => {
  const exercises = workoutSlice(state => state.exercises);
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

export default ExerciseList;
