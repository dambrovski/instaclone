import React from 'react';

import styles from './styles';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({imageUri, name}) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <ProfilePicture uri={imageUri} isMiniature={true} />
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.right}>
      <Icon name="ios-ellipsis-vertical-sharp" size={30} color="#46464d" />
    </View>
  </View>
);

//foto + nome

export default Header;
