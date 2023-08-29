import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { View, Text,FlatList,ImageBackground,Button,StyleSheet,Image } from 'react-native';
import { favoritte } from '../../api';
import styles from '../../components/product-list-item/style';
import { ProductListItem } from '../../components/product-list-item';

export default function FavoritesScreen({ navigation }) {

 const dispatch = useDispatch();
  let products = useSelector((state) => state.product)


    useEffect(() => {
      dispatch(favoritte())
      ;
  }, []);
const renderItem = ({item}) => {
    return <ProductListItem {...{ item,navigation}} />;
  };
  return (
<FlatList data={products.data6} 
       //         initialNumToRender={5}   // how many item to display first
       //    onEndReachedThreshold={5} // so when you are at 5 pixel from the bottom react run onEndReached function
     //      onEndReached={() => {
     //          handleLoadMore();
     //      }}
       
              contentContainerStyle={styles.container}

                renderItem={renderItem}
                 keyExtractor={item => item.id}
                     numColumns={2}
                 />  );
                 }