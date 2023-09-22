import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

function WeightInput({ placeholder }) {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lbs'); // Default unit is pounds

  const handleUnitChange = () => {
    const newUnit = unit === 'lbs' ? 'kg' : 'lbs';
    setUnit(newUnit);
  };
  
  

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={placeholder}
        value={weight}
        onChangeText={setWeight}
      />
      <Button title={unit} onPress={handleUnitChange} />
    </View>
  );
}
function GenderInput() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (selected) => {
    setSelectedGender(selectedGender === selected ? null : selected);
  };

  return (
    <View style={styles.genderContainer}>
      <TouchableOpacity
        style={[styles.genderButton, selectedGender === 'male' && styles.maleButton]}
        onPress={() => handleGenderSelection('male')}
      >
        <Text style={styles.genderText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.genderButton, selectedGender === 'female' && styles.femaleButton]}
        onPress={() => handleGenderSelection('female')}
      >
        <Text style={styles.genderText}>Female</Text>
      </TouchableOpacity>
    </View>
  );
}
function AgeInput() {
  const [age, setAge] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Age"
        value={age}
        onChangeText={setAge}
      />
    </View>
  );
}
function QuestionScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Answer these questions to start</Text>
          <Text style={styles.textSmaller}>What is your age?</Text>
          <WeightInput placeholder="Enter Body Weight" />
          <Text style={styles.textSmaller}>What is your gender?</Text>
          <GenderInput/>
          <Text style={styles.textSmaller}>What is your age?</Text>
          <AgeInput/>
          <TouchableOpacity style={styles.SubmitButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 23,
    margin: 20,
  },
  textSmaller: {
    fontSize: 20,
    margin: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 220,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    margin: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  selectedGender: {
    backgroundColor: '#f08080',
  },
  genderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  maleButton: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
  },
  femaleButton: {
    backgroundColor: 'pink',
    borderColor: 'pink',
  },
  SubmitButton:{
    borderRadius:10,
    borderColor:"Black",
    borderWidth:1,
    height:30,
    width:150,
    margin:20,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:`#e9967a`
  },
  buttonText: {
    color: 'black',
  },
  
});

export default QuestionScreen;
