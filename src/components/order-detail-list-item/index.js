import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Checkbox} from '..';
import {deleteTodoAsync, logoutProcess} from '../../api';

import {useDispatch} from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';


export const OrderDetailListItem = ({item, setModalVisible, setEditValue, setID,navigation,number,order_detail}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const deleteTask = () => {
    dispatch(deleteTodoAsync({id: item.id}));
  };

  const openModal = () => {
    setModalVisible(true);
    setEditValue(item.title);
    setID(item.id);
  };
const renderItem = ({item}) => {
  
    return  <View>

    <TouchableWithoutFeedback onPress={()=>navigation.navigate('ProductDetailScreen',{id:item.product_id})}>

 <View style={styles.itemContainer}>
        <Image source={img} style={styles.image} />
        <View >
                  <Text style={{color:'#0000FF'}}>{item.brand}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Adet: {item.qty}</Text>
                    <Text style={{color:'#ff0000'}}> {item.subtotal}₺</Text>

        </View>
      </View>
              </TouchableWithoutFeedback>

      </View>;
  };
    const img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/product_v/original/';
const image=img_path+item?.img_url;
const img={uri:image};
console.log(img);
  return (
<View>
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <Text>Sipariş No: </Text><Text style={{fontWeight:'bold'}}>{number}</Text>
    </View>
<View style={{flexDirection:'row'}}>
    <Text>Sipariş Tarihi: </Text><Text style={{fontWeight:'bold'}}>{item.createdAt}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    <Text>Sipariş Özeti: </Text><Text style={{fontWeight:'bold'}}>{item.qty} Ürün</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    <Text>Toplam: </Text><Text style={{color:'#ff0000'}}>{item.total}₺</Text>
    </View>
    </View>

     <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'#ff0999'}}>Kargo Bekleniyor</Text>
    </View>
<FlatList data={order_detail} 
                renderItem={renderItem}
                 keyExtractor={item => item.id}
                 />
  
    
    </View>
 <View style={styles.container}>
   


<View style={{flexDirection:'row'}}>
   <Icon size={25} color='#ff0000' name='map-marker'/><Text style={{fontWeight:'bold'}}>Teslimat Adresi</Text>
    </View>
  
    </View>

    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#FFF',
        elevation: 4,
borderRadius:15
    },
    title: {
      flex:1,
        fontSize: 10,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        
    },
    description: {
      textAlign:'right',
        fontSize: 16,
    },
    photo: {
        height: 50,
        width: 50,
    },
     itemContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:  'row' 
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  }
});