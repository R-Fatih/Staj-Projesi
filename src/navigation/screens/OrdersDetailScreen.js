import React, {useEffect, useState} from 'react';

import { View, Text ,StyleSheet,Button, TouchableWithoutFeedback, FlatList,TextInput, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { orderDetail, orders } from '../../api';
import { OrderDetailListItem } from '../../components';
import { useRoute } from '@react-navigation/native';
export default function OrdersDetailScreen({ navigation }) {

    const dispatch=useDispatch();
        const route = useRoute()
  const id = route.params?.id
  const number=route.params?.number
    const order_detail=route.params?.order_detail
const orders2=useSelector(state=>state.user);

   useEffect(() => {
      dispatch(orderDetail({order_id:id}))
      ;
  }, []);
  console.log(orders2.data13)
const renderItem = ({item}) => {
  
    return <OrderDetailListItem {...{ item,navigation,number,order_detail}} />;
  };


    return(<FlatList data={orders2.data13} 
                renderItem={renderItem}
                 keyExtractor={item => item.id}
                 /> )
}