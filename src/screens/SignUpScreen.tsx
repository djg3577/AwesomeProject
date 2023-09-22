import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';

function SignUpScreen(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Enter a email and password</Text>

          <TextInput
            style={styles.input}
            defaultValue="Enter Email"
          />
          <TextInput
            style={styles.input}
            defaultValue="Enter Password"
          />
          <TouchableOpacity style={styles.SignUpButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Sign Up!</Text>
          </TouchableOpacity>
          <Text>Or</Text>
          <Text>G A F</Text>
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
  text:{
    fontSize:20,
    margin:20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    margin: 10,
  },
  ForgotPasswordButton: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginLeft:175,
    marginTop:-5
  },
  buttonText: {
    color: 'black',
  },
  LoginButton:{
    borderRadius:10,
    borderColor:"Black",
    borderWidth:1,
    height:30,
    width:150,
    alignItems:"center",
    justifyContent:'center',
    margin:20,
    backgroundColor:`#f08080`
  },
  SignUpButton:{
    borderRadius:10,
    borderColor:"Black",
    borderWidth:1,
    height:30,
    width:150,
    margin:20,
    alignItems:"center",
    justifyContent:'center',
    backgroundColor:`#fffacd`
  },
});
export default SignUpScreen;