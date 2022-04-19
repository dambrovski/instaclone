import React from 'react';

import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, isMiniature}) => (
  <View style={isMiniature ? styles.containerMiniature : styles.container}>
    <Image
      source={{uri}}
      style={isMiniature ? styles.imageMiniature : styles.image}
    />
  </View>
);

export default ProfilePicture;
