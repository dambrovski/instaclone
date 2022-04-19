import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import VideoScreen from '../screens/VideoScreen';
import MarketScreen from '../screens/MarketScreen';

import HomeHeader from '../components/HomeHeader';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitle: props => <HomeHeader {...props} />,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          let passHome;
          let passVideo;
          let passBag;
          let passUser;
          let passSearch;
          if (route.name === 'Home') {
            iconName = focused ? (passHome = 1) : (passHome = 2);
          } else if (route.name === 'Search') {
            //iconName = focused ? 'ios-search' : 'md-search-outline';
            passSearch = true;
          } else if (route.name === 'VideoScreen') {
            iconName = focused ? (passVideo = 1) : (passVideo = 2);

            //iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === 'MarketScreen') {
            passBag = true;
            //iconName = focused ? 'ios-briefcase' : 'ios-briefcase-outline';
          } else if (route.name === 'Profile') {
            //iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            iconName = focused ? (passUser = 1) : (passUser = 2);
          }

          if (passHome == 1) {
            return (
              <Image
                source={require('../assets/images/instagram-home.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          } else if (passHome == 2) {
            return (
              <Image
                source={require('../assets/images/instagram-home-off.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          }

          if (passSearch == true) {
            return (
              <Image
                source={require('../assets/images/instagram-search.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          }
          if (passVideo == 1) {
            return (
              <Image
                source={require('../assets/images/video-instagram-off.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          } else if (passVideo == 2) {
            return (
              <Image
                source={require('../assets/images/video-instagram.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          }

          if (passBag == true) {
            return (
              <Image
                source={require('../assets/images/instagram-bag.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          }

          if (passUser == 1) {
            return (
              <Image
                source={require('../assets/images/instagram-user-on.png')}
                fadeDuration={0}
                style={{width: 25, height: 25}}
              />
            );
          } else if (passUser == 2) {
            return (
              <Image
                source={require('../assets/images/instagram-user.png')}
                fadeDuration={0}
                style={{width: 27, height: 27}}
              />
            );
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="VideoScreen" component={VideoScreen} />
      <Tab.Screen name="MarketScreen" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Router;
