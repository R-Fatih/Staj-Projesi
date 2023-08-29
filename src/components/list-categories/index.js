import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {deleteTodoAsync} from '../../api';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const CategoryListItem = ({item, setModalVisible, setEditValue, setID,navigation,rank}) => {
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
  let img_path;
  switch(rank){
  case 1:
 img_path='http://eticaret.demo.pigasoft.com/panel/uploads/product_first_group_v/';
 break;
  case 2:
    img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/product_second_group_v/350x216/';
    break;
    case 3:
      img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/product_third_group_v/350x216/';
      
    }
const image=img_path+item?.img_url;
const img={uri:image};
  return (
        <TouchableWithoutFeedback onPress={ () => rank===3?navigation.navigate('ProductView',{id:item.id,category:2}): rank!==2? navigation.navigate('CategoryDetailsScreen',{id:item.id,headerText:item.title}):item.isNext==true?( navigation.navigate('CategoryDetailsScreen2',{id:item.id})):navigation.navigate('ProductView',{id:item.id,category:1})}>

    <View style={styles.container}>
        <Image source={ img } style={styles.photo} /><Text >
                {item.title}
            </Text>
        <View style={styles.container_text}>
            
            <Text style={styles.description}>
            </Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});