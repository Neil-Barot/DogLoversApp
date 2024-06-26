// navigation/RootStack.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import VideoFeedScreen from '../screens/VideoFeedScreen';
import UploadVideoScreen from '../screens/UploadVideoScreen';

// Define and export the RootStackParamList type
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Signup: undefined;
  VideoFeed: undefined;
  UploadVideo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="VideoFeed" component={VideoFeedScreen}/>
        <Stack.Screen name="UploadVideo" component={UploadVideoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
