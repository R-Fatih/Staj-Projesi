import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useRoute } from "@react-navigation/native"

import { Text,View,FlatList } from "react-native"
import { AdressListItem } from '../../components';
import { address } from '../../api';
export default function AdressesScreen({ navigation }) {
         const dispatch = useDispatch();

const route = useRoute()
  const button = route.params?.button

  const postStatus = useSelector((state) => state.user)
console.log('quaresma'+postStatus.data);
const renderItem = ({item}) => {
    return <AdressListItem {...{ item,navigation,button}} />;
  };
useEffect(() => {
    postStatus !== undefined
      ?  dispatch(address())
      : null;
  }, []);



    return( <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',borderRadius:1,backgroundColor:'#fff'}}>
          
                 <FlatList data={postStatus.data} 
                
                renderItem={renderItem}
                 keyExtractor={item => item.id}/>
        </View>)
}