// Fix issues regarding routes

/*import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import supabase from '../supabaseClient';
import { followUser, unfollowUser } from '../utils/followUnfollow'

const UserProfileScreen = ({ route}) => {
  const { userId } = route.params;
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = supabase.auth.user();
      if (user) {
        setCurrentUserId(user.id);
        const { data, error } = await supabase
          .from('follows')
          .select('*')
          .eq('follower_id', user.id)
          .eq('following_id', userId);

        if (data && data.length > 0) {
          setIsFollowing(true);
        }
      }
    };

    fetchCurrentUser();
  }, [userId]);

  const handleFollow = async () => {
    if (currentUserId) {
      const data = await followUser(currentUserId, userId);
      if (data) {
        setIsFollowing(true);
      }
    }
  };

  const handleUnfollow = async () => {
    if (currentUserId) {
      const data = await unfollowUser(currentUserId, userId);
      if (data) {
        setIsFollowing(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      {isFollowing ? (
        <Button title="Unfollow" onPress={handleUnfollow} />
      ) : (
        <Button title="Follow" onPress={handleFollow} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserProfileScreen;*/
