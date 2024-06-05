// utils/followUnfollow.ts

import supabase from '../supabaseClient';

export const followUser = async (followerId: string, followingId: string) => {
  const { data, error } = await supabase
    .from('follows')
    .insert([{ follower_id: followerId, following_id: followingId }]);

  if (error) {
    console.error('Error following user:', error.message);
    return null;
  }

  return data;
};

export const unfollowUser = async (followerId: string, followingId: string) => {
  const { data, error } = await supabase
    .from('follows')
    .delete()
    .eq('follower_id', followerId)
    .eq('following_id', followingId);

  if (error) {
    console.error('Error unfollowing user:', error.message);
    return null;
  }

  return data;
};
