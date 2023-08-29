import React, {useEffect, useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

import { Text, View,TextInput,Button } from "react-native"
import { useDispatch, useSelector } from 'react-redux';
import { cargo, createOrder } from '../../api';
import {  } from 'react-native-gesture-handler';
export default function MakeOrder({ navigation }) {
const [value,setValue]=useState('');
      const [data2,setData2] = useState([]);
const [cargoValue,setCargoValue]=useState(0);
const [couponCode,setCouponCode]=useState('');
const data=[{key:0,value:'Kredi Kartı'},{key:1,value:'Kapıda ödeme'},{key:2,value:'Havale / EFT'}]
const dispatch=useDispatch();
const cargolist=useSelector(state=>state.user);
let newarray,newarray2;

useEffect(() => {
    cargolist !== undefined
      ?  dispatch(cargo()).then(()=>{
         newarray = cargolist.data8.map((item) => {
          return {key: item.id, value: item.title}
        })
        //Set Data Variable
        setData2(newarray)
      })
      : null;
  }, []);
  

    return(
    <View>
    <Text>Ödeme Yöntemi Seçin: </Text>
    <SelectList 
        setSelected={(val) => {setValue(val)}} 
        data={data} 
        save="key"
              search={false} 
      defaultOption={{ key:'0', value:'Kredi Kartı' }}   //default selected option

    />
    <Text>Kargo Firması Seçin: </Text>
    <SelectList 
        setSelected={(val) => {setCargoValue(val)}} 
        data={data2} 
        save="key"
              search={false} 
      defaultOption={{ key:'1', value:'UPS KARGO' }}   //default selected option

    />
    <Text>Eklemek istediğiniz not var mı?</Text>
    <TextInput  style={{
borderWidth:1,
borderColor:'#909090',
width:'90%',
justifyContent:'center',
alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10
  }}  value={couponCode} onChangeText={setCouponCode} placeholder='Kupon Kodu'></TextInput>
  <Button
        title="Ödeme Ekranı"
        onPress={() => {if(value!=0){
            dispatch(createOrder({payment_type:value,cargo_id:cargoValue,order_note:couponCode}));
            navigation.navigate('OrderCompleteScreen')
        }}}
      />      
    </View>)
}
