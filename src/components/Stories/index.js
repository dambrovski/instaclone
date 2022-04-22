import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import UserStoriesPreview from '../UserStoriesPreview';
import UserStoryPreview from '../UserStoryPreview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import data from '../../data';

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <UserStoriesPreview imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
