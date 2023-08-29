import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Checkbox} from '..';
import {deleteTodoAsync, logoutProcess} from '../../api';

import {useDispatch} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';


export const OrderListItem = ({item, setModalVisible, setEditValue, setID,navigation,rank}) => {
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
  const img_path='https://www.demo.pigasoft.com/eticaret/panel/uploads/product_v/original/';
const image=img_path+item?.img_url;
const img={uri:image};
    return                         <Image source={img} style={styles.image} />

  }
  return (
        <TouchableWithoutFeedback onPress={ () =>navigation.navigate('OrdersDetailScreen',{id:item.order_id,number:item.order_number,order_detail:item.order_detail})}>

    <View style={styles.container}>
    <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}} >
                {item.order_date}
                
            </Text>
                <Text style={{color:'#ff0000'}}>Toplam: {item.total_amount}</Text>
                            <Divider/>

<Text>
  Kargo bekleniyor
</Text>
<FlatList data={item.order_detail} renderItem={renderItem}
                 keyExtractor={item => item.id}/>

</View>
<View style={{alignItems:'flex-end'}}>
<TouchableOpacity style={{marginLeft:200}}>
                  <Text style={{color:'#ff0000'}}>Detaylar</Text>
                </TouchableOpacity>
                </View>
            <View style={{flexDirection:'column'}}>
            



        </View>
     
    </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#FFF',
        elevation: 4,

    },
    title: {
      textAlign:'center',
        fontSize: 16,
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
    },image: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  }
});