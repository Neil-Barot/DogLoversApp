import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { launchImageLibrary, launchCamera, MediaType, ImagePickerResponse } from 'react-native-image-picker';
import supabase from '../supabaseClient';

// Needed major help for this section review when you have time

const UploadVideoScreen = () => {
    const [video, setVideo] = useState<ImagePickerResponse | null>(null);
  
    const pickVideo = () => {
      launchImageLibrary({ mediaType: 'video' }, (response) => {
        if (response.didCancel) {
          console.log('User cancelled video picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setVideo(response);
        }
      });
    };
  
    const recordVideo = () => {
      launchCamera({ mediaType: 'video' }, (response) => {
        if (response.didCancel) {
          console.log('User cancelled video recording');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else {
          setVideo(response);
        }
      });
    };
  
    const uploadVideo = async () => {
        if (video && video.assets && video.assets.length > 0) {
          const videoFile = video.assets[0];
          const { uri, fileName, type } = videoFile;
      
          // Upload video to Supabase storage
          const response = await fetch(uri!);
          const blob = await response.blob();
      
          const { data, error } = await supabase.storage
            .from('videos')
            .upload(fileName!, blob, { contentType: type });
      
          if (error) {
            console.log('Error uploading video:', error.message);
          } else {
            console.log('Video uploaded successfully');
            // Save video metadata to Supabase table
            const { error: insertError } = await supabase
              .from('videos')
              .insert([{ url: data.path, caption: 'Your caption here' }]);
      
            if (insertError) {
              console.log('Error inserting video metadata:', insertError.message);
            } else {
              console.log('Video metadata inserted successfully');
            }
          }
        }
      };
      

  
    return (
      <View style={styles.container}>
        <Button title="Pick a Video" onPress={pickVideo} />
        <Button title="Record a Video" onPress={recordVideo} />
        <Button title="Upload Video" onPress={uploadVideo} disabled={!video} />
        {video && <Text>Video selected: {video.assets && video.assets[0].fileName}</Text>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
  });
  


export default UploadVideoScreen;