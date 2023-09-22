import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalData } from '../GlobalDataContext'; // If needed
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation(); 
  const { globalProtein, globalFat, globalCarbs, globalCalories } = useGlobalData();


  const targetCalories = 2000;
  const targetProtein = 100; // in grams
  const targetFat = 70; // in grams
  const targetCarbs = 300; // in grams
  // Calculate the percentage of consumed calories relative to the target
  const caloriePercentage = Math.min((globalCalories / targetCalories)*100,100);
  // Calculate the percentage of consumed protein, fat, and carbs relative to their targets
  const proteinPercentage = Math.min((globalProtein / targetProtein) * 100,100);
  const fatPercentage = Math.min((globalFat / targetFat) * 100,100);
  const carbsPercentage = Math.min((globalCarbs / targetCarbs) * 100, 100);

  return (
    <View style={styles.container}>
      {/* Calorie Section */}
      <View style={styles.section}>
        <Text>Calories Consumed: {globalCalories} kcal</Text>
        <Text>Target Calories: {targetCalories} kcal</Text>
        <View style={styles.calorieProgressBar}>
          <View style={[styles.caloriePogressFill, { height: `${caloriePercentage}%` }]} />
        </View>
        <Text>Remain: {targetCalories - globalCalories} kcal</Text>
      </View>

      {/* Protein Section */}
      <View style={styles.section}>
        <Text style={styles.text}>Protein Consumed: {globalProtein} g</Text>
        <Text style={styles.text}>Target Protein: {targetProtein} g</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${proteinPercentage}%` }]} />
        </View>
      </View>

      {/* Fat Section */}
      <View style={styles.section}>
        <Text style={styles.text}>Fat Consumed: {globalFat} g</Text>
        <Text style={styles.text}>Target Fat: {targetFat} g</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${fatPercentage}%` }]} />
        </View>
      </View>

      {/* Carbs Section */}
      <View style={styles.section}>
        <Text style={styles.text}>Carbs Consumed: {globalCarbs} g</Text>
        <Text style={styles.text}>Target Carbs: {targetCarbs} g</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${carbsPercentage}%` }]} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchingForFood')}>
        <Text style={styles.buttonText}>Log Food</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 10, // Adjust the height of the progress bar
    width: '25%', // Adjust the width of the progress bar container
    backgroundColor: '#ccc',
  },
  calorieProgressBar:{
    height: 100,
    backgroundColor: '#ccc',
    width:40,
    justifyContent: 'flex-end',
  },
  calorieProgressBarContainer: {
    height: '100%',
    justifyContent: 'center', // Center align the calorie bar
  },
  caloriePogressFill:{
    height: '100%',
    backgroundColor: 'black', // Customize the fill color
  },
  progressBar: {
    height: 10,
    backgroundColor: 'black',
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'lightblue', // Customize the fill color
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'lightblue', // Customize the button style
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text:{
    fontSize:12,
  },
});

export default HomeScreen;
