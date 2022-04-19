import React, {useState, useEffect} from 'react';

import {Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = ({likesCount: likesCountProp, name, caption}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);
    const amount = isLiked ? -1 : 1;
    const tst = parseInt(likesCount, 10);
    var newVar = tst + amount;
    setLikesCount(newVar);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View>
      <View style={styles.containerIcons}>
        <View style={styles.iconsLeft}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <Icon
                name="ios-heart-sharp"
                size={22}
                color="#DE2E43"
                borderRadius={5}
              />
            ) : (
              <Icon
                name="ios-heart-outline"
                size={22}
                color="#46464d"
                borderRadius={5}
              />
            )}
          </TouchableWithoutFeedback>
          <Icon
            name="chatbubble-outline"
            size={20}
            color="#46464d"
            style={{transform: [{rotateY: '180deg'}]}}
            borderRadius={5}
          />
          <Icon
            name="paper-plane-outline"
            size={21}
            color="#46464d"
            borderRadius={5}
          />
        </View>
        <Image
          source={require('../../../../assets/images/toggle-off.png')}
          fadeDuration={0}
          style={{width: 25, height: 25}}
        />
      </View>
      <Text style={styles.likes}>{likesCount} curtidas</Text>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.caption}> {caption}</Text>
      </View>
      <Text style={styles.time}>Há 4 minutos</Text>
    </View>
  );
};

export default Footer;
