import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {addBasket, deleteTodoAsync} from '../../api';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input'


export const BasketListItem = ({item, setModalVisible, setEditValue, setID,navigation,rank}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const add = (id,qty) => {
    dispatch(addBasket({product_id: id,qty:qty}));
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
const image=item?.img_url;
const img={uri:image};
  return (

    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
        <Image source={ img } style={styles.photo} />
        <Text >
        
                {item.title}    
                            </Text>
                             <TouchableHighlight>
     <View>
               <Icon name="delete" size={30} color="#900" />
     </View>
 </TouchableHighlight>  
                            </View>
               
 <View style={{alignSelf:'center',flexDirection:'row'}}>
 <Text>
                <NumericInput     totalWidth={60} 
            totalHeight={50} 
            iconSize={25}           rightButtonBackgroundColor='#900' 
            leftButtonBackgroundColor='#900'value={item.qty} onChange={value => value>item.qty?add(item.id,1): add(item.id,-1)} />
                
            </Text>
            <Text style={{color:'#ff0000'}}>
                              {Math.abs(item.price)} TL

            </Text>
            </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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