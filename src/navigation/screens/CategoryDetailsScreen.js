import React, {useEffect, useState} from 'react';
import { View, Text,FlatList,ImageBackground,Button, TouchableHighlight,TouchableWithoutFeedback } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { postSecondCategories } from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import { Input, CategoryListItem} from '../../components';
import {setHeader,header} from '../MainContainer'
import { selectAllFirstCategories, selectPostById, selectSecondCategories } from '../../redux/slice/categorySlice';
import { connect } from 'react-redux';

export default function CategoryDetailsScreen({ navigation }) {
     const dispatch = useDispatch();

     
    const route = useRoute()
  const id = route.params?.id
  const headertext=route.params?.headerText
  console.log(headertext);
const rank=2;

  const postStatus = useSelector((state) => state.category)
console.log('quaresma'+postStatus.data2);
const renderItem = ({item}) => {
    return <CategoryListItem {...{ item,navigation,rank}} />;
  };
useEffect(() => {
    postStatus !== undefined
      ?  dispatch(postSecondCategories({first_category_id:id})).then(navigation.setParams({header:headertext}))

      : null;
  }, []);


    return (
      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
                 <FlatList data={postStatus.data2} 
                
                renderItem={renderItem}
                 keyExtractor={item => item.id}/>
        </View>
    );
}