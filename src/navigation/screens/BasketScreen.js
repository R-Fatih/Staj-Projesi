import React, {useEffect, useState} from 'react';
import { View, Text,FlatList,ImageBackground,Button, TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { getBasket, getfirstCategories } from '../../api';
import { selectAllFirstCategories } from '../../redux/slice/categorySlice';
import { Input, CategoryListItem} from '../../components';
import { BasketListItem } from '../../components/basket-list-item';
import SettingsScreen from './SettingsScreen';

export default function BasketScreen({ navigation }) {

const rank=1;

 const dispatch = useDispatch();
//dispatch(getTodosAsync());
const authStatus=useSelector(state=>state.authentication);
  const postStatus = useSelector((state) => state.product)
console.log('quaresma'+postStatus.status);
const renderItem = ({item}) => {
    return <BasketListItem {...{ item,navigation,rank}} />;
  };
useEffect(() => {
     dispatch(getBasket())
      ;
  }, []);


const ren=()=>{
  
}


    return (
      authStatus.isSignedIn!=true?
      <SettingsScreen/>
      :      postStatus.data5!==undefined?
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
                 <FlatList data={postStatus.data5.data} 
                
                renderItem={renderItem}
                 keyExtractor={item => item.id}/>
                 <View style={{flexDirection:'row'}}>
                 <View style={{flexDirection:'column'}}>
                 <Text>Sepet Toplam: </Text>
                 <Text style={{color:'#ff0000'}}>{postStatus.data5.total}₺</Text>
                 </View>
                 <TouchableOpacity         onPress={()=>{
                  if(postStatus.data5.data.length==0)
                  alert('Sepetinizde ürün bulunamadı.')
                  else
                  navigation.navigate('AdressesScreen',{button:true});
                 }}
 style={{ backgroundColor: '#ff0000',
 marginLeft:45,
    padding: 10,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#fff'}}>Alışverişi Tamamla</Text>
    </TouchableOpacity>
                 </View>
        </View>
        :''
    );
}