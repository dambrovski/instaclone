import React from 'react';

import {Text, View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const Post = ({post: {user}}) => (
  <View>
    <Header imageUri={user.imageUri} name={user.name} />
    <Body imageUri={user.imagePost} />
    <Footer
      likesCount={user.likesCount}
      name={user.name}
      caption={user.caption}
    />
  </View>
);

export default Post;
