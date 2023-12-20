import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/NavigationConstants';
import { RouteProp } from '@react-navigation/native';

type CreateWorkoutNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateWorkout'
>;

type CreateWorkoutScreenRouteProp = RouteProp<
  RootStackParamList,
  'CreateWorkout'
>;

interface CreateWorkoutScreenProps {
  navigation: CreateWorkoutNavigationProp;
  route: CreateWorkoutScreenRouteProp;
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default function CreateWorkout({
  route,
}: CreateWorkoutScreenProps): React.JSX.Element {
  return (
    <View>
      <Text style={styles.textTitle}>Create Workout</Text>
      <Text style={styles.textTitle}>Test prop: {route.params.testProp}</Text>
    </View>
  );
}
