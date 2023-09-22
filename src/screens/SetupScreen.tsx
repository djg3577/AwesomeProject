import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';

function SetupScreen(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Awesome! Now lets add your workout schedule choose from options below.</Text>
        <TouchableOpacity style={styles.OptionButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Start with a template!</Text>
          </TouchableOpacity>
          <Text>Or</Text>
          <TouchableOpacity style={styles.OptionButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Manually Enter!</Text>
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
  OptionButton:{
    borderRadius:10,
    borderColor:"Black",
    borderWidth:1,
    height:100,
    width:200,
    margin:20,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:`#f08080`
  },
  buttonText: {
    color: 'black',
  },
  
});

export default SetupScreen;