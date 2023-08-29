import React, {useState} from 'react';
import {Text, View,Image,StyleSheet,Button, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {deleteTodoAsync} from '../../api';
import Stars from 'react-native-stars';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';

export const ProductListItem = ({item, setModalVisible, setEditValue, setID,navigation,rank}) => {
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
  const img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/product_v/original/';
const image=img_path+item?.img_url;
const img={uri:image};


  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('ProductDetailScreen',{id:item.id})}>
    <View style={styles.itemContainer}>
        <Image source={img} style={styles.image} />
        <View style={styles.textContainer}>
                  <Text style={{color:'#0000FF'}}>{item.brand}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{flexDirection:'row'}}>
          <Stars
    display={item.point}
    spacing={2}
    count={5}
    starSize={10}
    fullStar= {require('./images/starFilled.png')}
    emptyStar= {require('./images/starEmpty.png')}/>
    <Text style={{fontSize:10}}>({item.review})</Text>
    </View>
          <Text style={{color:'#ff0000',alignSelf:'center'}}>{item.price} TL</Text>
          <TouchableOpacity         onPress={() => {login()}}
 style={{ backgroundColor: '#fff',
    padding: 10,
    width: '90%',
    borderRadius: 20,borderWidth:1,
    alignItems: 'center'}}>
<Text style={{color:'#000'}}>Ürün Detayı</Text>
    </TouchableOpacity>

        </View>
      </View>
      </TouchableWithoutFeedback>
  );
};
