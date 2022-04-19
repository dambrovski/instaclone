import React from 'react';

import {Image, View} from 'react-native';
import styles from './styles';

const PostImage = ({uri}) => (
  <View>
    <Image source={{uri}} style={styles.image} />
  </View>
);

export default PostImage;
