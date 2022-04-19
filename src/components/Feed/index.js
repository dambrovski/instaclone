import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Stories from '../Stories';
import Post from '../Post';

const data = [
  {
    user: {
      id: 1,
      imageUri:
        'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272194736_468332178152464_1333341791696415973_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=c89b6_b1YeMAX_2_QiB&tn=voouVdJySmO21-NU&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8Zv4DtfoRKXOi7-BonWa4-7AaP-9ehw_oEeh8yLYyHgw&oe=624BEBFC&_nc_sid=9a90d6',
      name: 'dambrovski_',
      imagePost:
        'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'legenda bluepill aqui #travel #blabla',
      likesCount: '62',
    },
  },
  {
    user: {
      id: 2,
      imageUri:
        'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272162680_3064173517203789_5818602174738168306_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=3qHMot01nJ8AX9zmoGu&edm=ALCvFkgBAAAA&ccb=7-4&oh=00_AT_auDGZUOKseHQe2a_2HLh3RVOd_xBCSdpI4I6uJOHwPg&oe=624B6615&_nc_sid=643ae9',
      name: 'amandaliege',
      imagePost:
        'https://images.pexels.com/photos/160755/kittens-cats-foster-playing-160755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'amo gatos',
      likesCount: '659',
    },
  },
  {
    user: {
      id: 3,
      imageUri:
        'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272194736_468332178152464_1333341791696415973_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=c89b6_b1YeMAX_2_QiB&tn=voouVdJySmO21-NU&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8Zv4DtfoRKXOi7-BonWa4-7AaP-9ehw_oEeh8yLYyHgw&oe=624BEBFC&_nc_sid=9a90d6',
      name: 'dambrovski_',
      imagePost:
        'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'outra aqui #travel #blabla',
      likesCount: '900',
    },
  },
  {
    user: {
      id: 4,
      imageUri:
        'https://scontent-gig2-1.cdninstagram.com/v/t51.2885-19/272162680_3064173517203789_5818602174738168306_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-gig2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=3qHMot01nJ8AX9zmoGu&edm=ALCvFkgBAAAA&ccb=7-4&oh=00_AT_auDGZUOKseHQe2a_2HLh3RVOd_xBCSdpI4I6uJOHwPg&oe=624B6615&_nc_sid=643ae9',
      name: 'amandaliege',
      imagePost:
        'https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      caption: 'sou #vintage rs #italia #cafe',
      likesCount: '23',
    },
  },
];

const Feed = () => (
  <FlatList
    data={data}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => <Post post={item} />}
    
    ListHeaderComponent={Stories}
  />
);

export default Feed;
