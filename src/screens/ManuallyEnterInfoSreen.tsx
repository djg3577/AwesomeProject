import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const ManuallyEnterInfoScreen: React.FC = () => {
    const [tempInput, setTempInput] = useState<string>(''); // Temporary state for input
    const [workoutScheduleName, setWorkoutScheduleName] = useState<string>('');
    const [currentDayName, setCurrentDayName] = useState<string>('');
    const [currentExerciseType, setCurrentExerciseType] = useState<string>('');
    const [currentExerciseName, setCurrentExerciseName] = useState<string>('');
    const [exerciseDetails, setExerciseDetails] = useState<{ [key: string]: any }>({});

    const saveToDatabase = () => {
        // Save all details to database logic
    };

    return (
        <View style={{ ...styles.container, flex: 1, padding: 16 }}>
            {!workoutScheduleName ? (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Workout Schedule Name"
                        value={tempInput}
                        onChangeText={setTempInput}
                    />
                    <Button title="Next" onPress={() => setWorkoutScheduleName(tempInput)} />
                </View>
            ) : !currentDayName ? (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Day Name (e.g., Leg Day)"
                        value={tempInput}
                        onChangeText={setTempInput}
                    />
                    <Button title="Add Exercise" onPress={() => setCurrentDayName(tempInput)} />
                </View>
            ) : !currentExerciseType ? (
                <View style={styles.inputContainer}>
                    <Button title="Cardio" onPress={() => setCurrentExerciseType('Cardio')} />
                    <Button title="Weight Training" onPress={() => setCurrentExerciseType('WeightTraining')} />
                </View>
            ) : !currentExerciseName ? (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Exercise Name"
                        value={tempInput}
                        onChangeText={setTempInput}
                    />
                    <Button title="Next" onPress={() => setCurrentExerciseName(tempInput)} />
                </View>
            ) : (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Exercise Detail"
                        value={tempInput}
                        onChangeText={setTempInput}
                    />
                    <Button title="Add Another Exercise" onPress={() => {}} />
                    <Button title="Finish Day" onPress={() => {}} />
                </View>
            )}
            <Button title="Finish Schedule" onPress={saveToDatabase} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    margin: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
  text: {
    fontSize: 23,
    margin: 20,
  },
  textSmaller: {
    fontSize: 20,
    margin: 20,
  }
});

export default ManuallyEnterInfoScreen;
