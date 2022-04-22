import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StoryScreen from '../screens/StoryScreen';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Story"
      component={StoryScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
