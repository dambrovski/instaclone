import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';

const eventLog = () => {
  <UserStoryPreview />;
  console.log('event');
};

const UserStoriesPreview = ({imageUri, name}) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUri} isMiniature={false} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default UserStoriesPreview;
