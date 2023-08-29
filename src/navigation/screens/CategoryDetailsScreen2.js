import React, {useEffect, useState} from 'react';
import { View, Text,FlatList,ImageBackground,Button, TouchableHighlight,TouchableWithoutFeedback } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { postSecondCategories, postThirdCategories } from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import { Input, CategoryListItem} from '../../components';

import { selectAllFirstCategories, selectPostById, selectSecondCategories } from '../../redux/slice/categorySlice';

export default function CategoryDetailsScreen2({ navigation }) {
     const dispatch = useDispatch();

    const route = useRoute()
  const id = route.params?.id
const rank=3;

  const postStatus = useSelector((state) => state.category)
console.log('quaresma'+postStatus.data3);
const renderItem = ({item}) => {
    return <CategoryListItem {...{ item,navigation,rank}} />;
  };
useEffect(() => {
    postStatus !== undefined
      ?  dispatch(postThirdCategories({second_category_id:id}))
      : null;
  }, []);



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
                 <FlatList data={postStatus.data3} 
                
                renderItem={renderItem}
                 keyExtractor={item => item.id}/>
        </View>
    );
}