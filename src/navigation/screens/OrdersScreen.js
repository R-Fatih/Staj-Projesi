import React, {useEffect, useState} from 'react';

import { View, Text ,StyleSheet,Button, TouchableWithoutFeedback, FlatList,TextInput, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { orders } from '../../api';
import { OrderListItem } from '../../components';
export default function OrdersScreen({ navigation }) {

    const dispatch=useDispatch();
const orders2=useSelector(state=>state.user);
   useEffect(() => {
      dispatch(orders())
      ;
  }, []);
  console.log(orders2.data12)
const renderItem = ({item}) => {
  
    return <OrderListItem {...{ item,navigation}} />;
  };


    return(<FlatList data={orders2.data12} 
                renderItem={renderItem}
                 keyExtractor={item => item.id}
                 /> )
}