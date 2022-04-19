import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
  },
  right: {},
  name: {
    alignSelf: 'center', //alinhei apenas o elemento name com alignself, mas poderia alinhar todos os elementos no style left para ser center
    color: '#737778',
    fontWeight: 'bold',
  },
});

export default styles;
