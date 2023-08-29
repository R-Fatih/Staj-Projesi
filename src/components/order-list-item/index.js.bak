import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Checkbox} from '..';
import {deleteTodoAsync, logoutProcess} from '../../api';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const AccountListItem = ({item, setModalVisible, setEditValue, setID,navigation,rank}) => {
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
        <TouchableWithoutFeedback onPress={ () =>item.button==undefined? navigation.navigate(item.navpage,{button:false}):dispatch(logoutProcess())}>

    <View style={styles.container}>
        <Text style={styles.title} >

            </Text>
            <View style={styles.container_text}>
            
            <Text style={styles.description}>
                         <Icon name={item.icon} style={{}} size={30} color="#000"/>

                {item.title}

            </Text>
        </View>
        <View style={styles.container_text}>
            
            <Text style={styles.description}>
                 <Icon name='arrow-circle-o-right'color="#000" size={20}/>

            </Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#FFF',
        elevation: 4,
                flex: 1,

    },
    title: {
      textAlign:'center',
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        
    },
    description: {
      textAlign:'right',
        fontSize: 16,
    },
    photo: {
        height: 50,
        width: 50,
    },
});