
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'column' 
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
});