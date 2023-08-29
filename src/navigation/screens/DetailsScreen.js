import React, {useEffect, useState} from 'react';
import { View, Text,FlatList,ImageBackground,Button, TouchableHighlight,TouchableWithoutFeedback } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { getfirstCategories } from '../../api';
import { selectAllFirstCategories } from '../../redux/slice/categorySlice';
import { Input, CategoryListItem} from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetailsScreen({ navigation }) {

const rank=1;

 const dispatch = useDispatch();
//dispatch(getTodosAsync());
const users = useSelector(state=>state.category)
console.log('quaresma'+users);
const renderItem = ({item}) => {
    return <CategoryListItem {...{ item,navigation,rank}} />;
  };
useEffect(() => {
    users !== undefined
      ?  dispatch(getfirstCategories())
      : null;
  }, []);





    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                 <FlatList data={users.data} 
                
                renderItem={renderItem}
                 keyExtractor={item => item.id}/>
        </View>
    );
}