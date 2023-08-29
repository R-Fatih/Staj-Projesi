import React, {useEffect, useState} from 'react';
import { View, Text,FlatList,ImageBackground,Button, TouchableHighlight,TouchableWithoutFeedback,ScrollView ,TouchableOpacity} from 'react-native';
import { useRoute } from "@react-navigation/native"
import { addBasket, favoritte, postSecondCategories, productDetail, toggleFavoritte } from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import { Input, CategoryListItem} from '../../components';
import { SliderBox } from "react-native-image-slider-box";

import { selectAllFirstCategories, selectPostById, selectSecondCategories } from '../../redux/slice/categorySlice';
import ImageSlider from './ImageSlider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function ProductDetailScreen({ navigation }) {
     const dispatch = useDispatch();
const [fav,setFav]=useState(false);
    const route = useRoute()
  const id = route.params?.id
const rank=2;

  const postStatus = useSelector((state) => state.product)
console.log('quaresma'+postStatus.data2);
const renderItem = ({item}) => {
    return <CategoryListItem {...{ item,navigation,rank}} />;
  };
useEffect(() => {
  
      dispatch(productDetail({product_id:id}))
       ;dispatch(favoritte()).then(()=>{
        if(postStatus.data6.find(x => x.id === id)!=undefined){
          setFav(true);
        }else{setFav(false)}
       });
  }, []);
//console.log(postStatus.data2.image);
 const togglefav = () => {
    dispatch(toggleFavoritte({product_id:id})).then(alert(fav==true?'Ürün favori listenizden çıkarıldı':'Ürün favori listenize eklendi.'));
    ;setFav(!fav)
  };
const addBasketButton=()=>{
    dispatch(addBasket({product_id:id,qty:1}));
    alert('Sepete eklendi');
}
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView>

<ImageSlider images={postStatus.data2!==undefined?postStatus.data2.images:[]} />

    <Text> {postStatus.data2!==undefined?postStatus.data2.data.title:''}</Text>
    <Text style={{fontSize:20,    fontWeight: 'bold'}}>Ürün hakkında bilgiler:</Text>
        <Text>{postStatus.data2!==undefined?postStatus.data2.data.description:''}</Text>
        <View style={{flexDirection:'row' ,alignSelf:'center'}}>
        <Text style={{fontWeight:'bold'}}>{postStatus.data2!==undefined?postStatus.data2.data.price:''} TL</Text>

        <TouchableOpacity onPress={()=>togglefav()}>
          <FontAwesomeIcon size={25} color='#ff0000' name={fav==true?'heart':'heart-o'}/>
        </TouchableOpacity>
        <TouchableOpacity         onPress={() => {addBasketButton()}}
 style={{ backgroundColor: '#ff0000',
    width: 60,
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#fff'}}>Sepete ekle</Text>
    </TouchableOpacity>
    </View>
</ScrollView>
        </View>
    );
}