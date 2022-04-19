import React from 'react';

import {Text, Image, View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const HomeHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/images/instagram-logo-4.png')}
        />
        <View style={styles.imageContainer}>
          <TouchableWithoutFeedback>
            <Image
              source={require('../../assets/images/add-icon-instagram.png')}
              fadeDuration={0}
              style={{width: 26, height: 26}}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require('../../assets/images/heart-instagram.png')}
              fadeDuration={0}
              style={{width: 26, height: 26}}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require('../../assets/images/messenger-ico.png')}
              fadeDuration={0}
              style={{width: 28, height: 28}}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
