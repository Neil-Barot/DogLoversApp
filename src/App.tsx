import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';

const App = () => {
  console.log("App log works")

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;

/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import supabase from './supabaseClient'; // Adjust the path as needed


const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    //const navigation = useNavigation();

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          console.log('Error logging in:', error.message);
        } else {
          console.log('Login successful');
          // Navigate to home screen or show a welcome message
          // navigation.navigate('Home'); // Make sure to have 'Home' screen in your navigation. Uncomment later
        }
      };
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={() => {handleLogin}} />
            <Button
                title="Go to Signup"
                //onPress={() => navigation.navigate('Signup')} //Uncomment when you add signup
            />
        </View>

    );


    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingLeft: 8,
    },
  });

  export default App;
*/