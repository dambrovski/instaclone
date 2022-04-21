import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import UserStoriesPreview from '../UserStoriesPreview';
import UserStoryPreview from '../UserStoryPreview';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const data = [
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272194736_468332178152464_1333341791696415973_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=c89b6_b1YeMAX_2_QiB&tn=voouVdJySmO21-NU&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8Zv4DtfoRKXOi7-BonWa4-7AaP-9ehw_oEeh8yLYyHgw&oe=624BEBFC&_nc_sid=9a90d6',
    name: 'dambrovski_',
  },
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272162680_3064173517203789_5818602174738168306_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=3qHMot01nJ8AX9zmoGu&edm=ALCvFkgBAAAA&ccb=7-4&oh=00_AT_auDGZUOKseHQe2a_2HLh3RVOd_xBCSdpI4I6uJOHwPg&oe=624B6615&_nc_sid=643ae9',
    name: 'amandaliege',
  },

  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/23823385_110471166399788_5343655093998714880_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=7QV-FXfGcfoAX9azPfN&edm=APU89FABAAAA&ccb=7-4&oh=00_AT_zguad4Crca-t18eyGNb2sKPFvOsV2RNL2dPBVJ0ARfA&oe=624AEC7F&_nc_sid=86f79a',
    name: 'ryan.celsius',
  },
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272627404_465217565089785_5283213042347615540_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=jiGTD54AHXUAX_7Dlqs&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8oWu4DG_vCFrf70Kz8SArYv6TjdD2_CjB--fZDXRd9Rw&oe=624BDB47&_nc_sid=9a90d6',
    name: 'zhouka2',
  },
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/277213941_3086834208300043_3137010653953014960_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=yTEC3Xq74-QAX8zQF5B&tn=voouVdJySmO21-NU&edm=ALCvFkgBAAAA&ccb=7-4&oh=00_AT8S4miXLP8AQ7oi7rKuPSiDrwLEyz2_lwKOy9x5XXf3bQ&oe=624B81EB&_nc_sid=643ae9',

    name: '_esmeros_',
  },
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/66208391_432711167571714_1130358813040312320_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=106&_nc_ohc=U0J-W1yIvI0AX94x3sa&tn=voouVdJySmO21-NU&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8_f97b0PacqJx1R31r6H_esx5hRKkJSuMgpTLQ5FNjvg&oe=624B3235&_nc_sid=9a90d6',
    name: 'Haverker',
  },
  {
    imageUri:
      'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/185931875_487661519139944_598616470244662528_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=o6lG9vqRGKQAX97gD_f&tn=voouVdJySmO21-NU&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-QE3i-K5F8bKV8kls9K9e8vUo9MBB-Mo9ZQulIZUQyGQ&oe=624B8531&_nc_sid=9a90d6',
    name: 'vinirupell',
  },
];

const eventLog = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="UserStoryPreview" component={UserStoryPreview} />
    </Stack.Navigator>
  </NavigationContainer>;
};

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
      <TouchableOpacity onPress={eventLog}>
        <UserStoriesPreview imageUri={item.imageUri} name={item.name} />
      </TouchableOpacity>
    )}
  />
);

export default Stories;
