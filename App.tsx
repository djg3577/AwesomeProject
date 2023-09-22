/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import SignUpScreen from './src/screens/SignUpScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen from './src/screens/QuestionScreen';
import SetupScreen from './src/screens/SetupScreen';
import ManuallyEnterInfoScreen from './src/screens/ManuallyEnterInfoSreen';
import LoginPage from './src/screens/LoginPage';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import SearchingForFood from './src/screens/TrackingMacros';
import { GlobalDataProvider } from './src/GlobalDataContext';
import HomeScreen from './src/screens/HomeScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useGlobalData } from './src/GlobalDataContext'; // Import useGlobalData if needed

const firebaseConfig = {
  apiKey: 'AIzaSyCb0sryOa3Xdbhw7nk44n7mRCoV7IGgqPw',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'liftlogic-7b409',
  storageBucket: 'liftlogic-7b409.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:798403524691:ios:b36502a0494e0b9309aea6'
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GlobalDataProvider>
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          
        </ScrollView>
      </SafeAreaView>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name="SearchingForFood" component={SearchingForFood} options={{ title: 'Search Food' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalDataProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
