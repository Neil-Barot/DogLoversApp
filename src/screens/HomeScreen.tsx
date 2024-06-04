import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supabase from '../supabaseClient'; // Adjust the path as needed

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Hello World</Text>
        </SafeAreaView>
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

export default HomeScreen;