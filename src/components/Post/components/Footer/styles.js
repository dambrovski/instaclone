import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerIcons: {
    flexDirection: 'row', //definindo que será alinhado em linha
    justifyContent: 'space-between', //justify content dos elementos em space-between
    padding: 5,
  },
  iconsLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginLeft: 6,
  },
  name: {
    color: '#2c2e2e',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  likes: {
    color: '#2c2e2e',
    fontWeight: 'bold',
    marginLeft: 12,
  },

  caption: {
    color: '#2c2e2e',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 6,
  },
  time: {
    marginLeft: 12,
  },
});

export default styles;
