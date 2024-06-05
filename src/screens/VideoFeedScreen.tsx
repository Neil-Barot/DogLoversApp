import React from "react";
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import Video from "react-native-video";

type VideoItem = {
    id: string;
    caption: string;
    url: string;
    // Add other properties as needed
  };

const { height } = Dimensions.get('window');

const videos:VideoItem[] = [
    { id: '1', url: 'https://www.example.com/video1.mp4', caption: 'Video 1' },
    { id: '2', url: 'https://www.example.com/video2.mp4', caption: 'Video 2 test' },
];

const VideoFeedScreen = () => {
    const renderItem = ({ item }: {item: VideoItem}) => (
        <View style={styles.videoContainer}>
            <Video
                source={{ uri: item.url}}
                style={styles.video}
                resizeMode="cover"
                repeat   
            />
            <Text style={styles.caption}>{item.caption}</Text>
        </View>
    );

    return(
        <FlatList
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            snapToInterval={height}
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '80%',
    },
    caption: {
        color: '#fff',
        fontSize: 16,
        position: 'absolute',
        bottom: 20,
        left: 10,
    }
});

export default VideoFeedScreen;