import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {deleteTodoAsync, getUrl} from '../../api';

import {useDispatch} from 'react-redux';

import styles from './style';


export const TodoListItem = ({item, setModalVisible, setEditValue, setID,navigation}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const deleteTask = () => {
    dispatch(deleteTodoAsync({id: item.id}));
  };

  const openModal = () => {
    setModalVisible(true);
    setEditValue(item.title);
    setID(item.id);
  };
const img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/slides_v/1970x500/';
const image=img_path+item?.img_url;
const img={uri:image};
  return (
<TouchableWithoutFeedback onPress={()=>navigation.navigate('ProductView',{main:true,button_url:item.button_url})}>

    <View style={styles2.container}>
      <ImageBackground  style={styles2.image} source={{uri:image}} >
      <Text style={styles.text}></Text>
      </ImageBackground>
    </View>
</TouchableWithoutFeedback>

  );
};
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width:350,
    height:200,
    flex: 1,
    justifyContent: 'center',
    marginBottom:10
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    height:250,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});