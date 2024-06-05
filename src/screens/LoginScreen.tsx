import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import supabase from '../supabaseClient'; // Adjust the path as needed
import { RootStackParamList } from '../navigation/RootStack';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the type

    const handleLogin = async () => {
      console.log("Attempting Login");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          console.log('Error logging in:', error.message);
        } else {
          console.log('Login successful');
          navigation.navigate('VideoFeed'); 
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
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Go to Signup"
                onPress={() => navigation.navigate('Signup')} 
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

  export default LoginScreen;