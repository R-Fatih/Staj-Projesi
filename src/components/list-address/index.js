import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Checkbox} from '..';
import {deleteTodoAsync, removeAddress, saveMemberDelivery} from '../../api';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const AdressListItem = ({item, setModalVisible, setEditValue, setID,navigation,button}) => {
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


  return (
        <TouchableWithoutFeedback onPress={()=>{
          if(button==true){
            dispatch(saveMemberDelivery({address_id:item.id})).then(navigation.navigate('MakeOrder'));
            
          }
        }}>

    <View style={styles.container}>
        <Text >
               <Icon name="map-marker" size={30} color="#900" />
   {item.city} - {item.town} 
   {button==false?
   <TouchableHighlight onPress={()=>{dispatch(removeAddress({address_id:item.id}));alert('Adres başarıyla kaldırıldı.')}}>
     <View>
               <Icon name="delete" size={30} color="#900" />
     </View>
 </TouchableHighlight>
 :''}
            </Text>
        <View style={styles.container_text}>
            
            <Text style={styles.description}>
            </Text>
        </View>
        <Text>{item.clear_address}</Text>
        <Text>{item.telephone}</Text>
        <Text>{item.name} {item.surname}</Text>
        
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
      width:'90%',
        flex: 1,
        flexDirection: 'column',
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