import React from 'react';

import {View, Text} from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';

const Story = ({imageUri, name}) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUri} isMiniature={false} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default Story;
