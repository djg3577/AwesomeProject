import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';

function LoginPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../images/LiftLogic.png')}
            style={{ width: 200, height: 200, margin: 15, borderColor: 'black', borderWidth: 1.5 }}
          />

          <TextInput
            style={styles.input}
            defaultValue="Enter Email"
          />

          <TextInput
            style={styles.input}
            defaultValue="Enter Password"
          />

          <TouchableOpacity style={styles.ForgotPasswordButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text>Or</Text>

          <TouchableOpacity style={styles.SignUpButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Sign Up!</Text>
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

export default LoginPage;
