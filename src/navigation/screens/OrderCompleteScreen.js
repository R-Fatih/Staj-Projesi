import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from "react-native"
export default function OrderCompleteScreen({ navigation }) {
         const dispatch = useDispatch();

         const order_number=useSelector(state=>state.user);
  
    return(<Text>Sipraişiniz başarıyla oluşturuldu. Sipariş numarası: {order_number.data9!==undefined?order_number.data9.order_number:''}</Text>)
}