import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import UserStoryPreview from '../UserStoryPreview';
import StoryScreen from '../../screens/StoryScreen';

const UserStoriesPreview = ({imageUri, name}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} isMiniature={false} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoriesPreview;
