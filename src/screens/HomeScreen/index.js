import React from 'react';

import {Text, View} from 'react-native';
import Feed from '../../components/Feed';

const post = {
  user: {
    imageUri:
      'https://instagram.ffln3-1.fna.fbcdn.net/v/t51.2885-15/277657312_722562772430935_3712176734635133363_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ffln3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=KRonEcuXg2AAX-K6x3n&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjgwNjQxODgwMTUyODY0NjQzNQ%3D%3D.2-ccb7-4&oh=00_AT-S1r_uhpb6aKrMTzEjV9ONnxTHgrmNW07ndsthURW8nw&oe=624C6BB9&_nc_sid=83d603',
    name: 'dambrovski_',
    likes: '54',
    caption: 'legenda bluepill aqui #travel #blabla',
  },
};

const HomeScreen = () => (
  <View>
    <Feed />
  </View>
);
export default HomeScreen;
