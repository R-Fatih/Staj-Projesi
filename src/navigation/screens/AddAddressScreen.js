import React, {useEffect, useState} from 'react';

import { Text,Image, View,Input,StyleSheet, TextInput,Button,TouchableOpacity, ScrollView } from "react-native"
import {  Divider } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import { city,save_address,town } from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function AddAddressScreen({ navigation }) {
         const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(true)

      const [name, setName] = useState('');
      const [surName,setSurname]=useState('');
            const [adress,setAdress]=useState('');

      const [phone,setPhone]=useState('');
      const [value,setValue]=useState(1);
            const [value2,setValue2]=useState(1);



      const [namebill, setNamebill] = useState('');
      const [surNamebill,setSurnamebill]=useState('');
            const [adressbill,setAdressbill]=useState('');

      const [phonebill,setPhonebill]=useState('');
      const [valuebill,setValuebill]=useState(1);
            const [value2bill,setValue2bill]=useState(1);

const [databill,setDatabill] = useState([]);
      const [data2bill,setData2bill] = useState([]);
      const [newarray2bill,setnewarray2bill]=useState([])

      const [data,setData] = useState([]);
      const [data2,setData2] = useState([]);
      const [newarray2,setnewarray2]=useState([])
let newarray;
   const postStatus = useSelector((state) => state.user)
      const authStatus = useSelector((state) => state.authentication)

      console.log('auth');
      console.log(authStatus.data.email);
useEffect(() => {
    postStatus !== undefined
      ?  dispatch(city()).then(()=>{
         setData( postStatus.data2.map((item) => {
          return {key: item.id, value: item.title}
        }))
        //Set Data Variable
      })
      : null;
  }, []);
  
  
  console.log(postStatus.data2);
    console.log('firts');
  console.log(postStatus.data3);
console.log(newarray2);
    return(
    <View style={styles.container}> 
    <ScrollView>
    <Text style={styles.text}>İletişim Bilgileri</Text>
    <Divider />
    <View style={styles.container2}>
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='user-circle'/>
    <TextInput value={name}
        onChangeText={setName} style={styles.input} placeholder='Ad Soyad'/>
    
        </View>
            <View style={{flexDirection:'row'}}>
            <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='user-circle'/>
        <TextInput value={surName}
        onChangeText={setSurname} style={styles.input} placeholder='Soyad'/>
        </View>
    <View style={{flexDirection:'row'}}>
            <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='phone'/>

<TextInput value={phone}
        onChangeText={setPhone} style={styles.input} placeholder='Telefon'/>
    </View>   
     </View>
    <View style={{flexDirection:'row'}}>
<Icon  style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000'name='map-marker'/>
        <Text style={{marginLeft:5,marginTop:9}}>Adres Bilgileri</Text>
        </View>
    <Divider />
        <Text style={styles.text}>Şehir Seçin</Text>
<SelectList 
        setSelected={(val) => {setValue(val)}} 
        onSelect={()=>{(dispatch(town({city_id:value}))).then(()=>{
         setnewarray2(  postStatus.data3.map((item) => {
          return {key: item.id, value: item.title}
        }))
        //Set Data Variable
        setData2(newarray2);
      })}}
        data={data} 
        save="key"
              search={false} 
      defaultOption={{ key:'1', value:'ADANA' }}   //default selected option

    />
     <Text style={styles.text}>İlçe Seçin</Text>
<SelectList 
        setSelected={(val) => setValue2(val)} 
        data={postStatus.data3!=undefined?postStatus.data3.map((item) => {
          return {key: item.id, value: item.title}
        }):''} 
        save="key"
              search={false} 
      defaultOption={{ key:'1', value:postStatus.data3!=undefined?postStatus.data3[0].title:''}}   //default selected option

    />
     <View style={{flexDirection:'row'}}>
<Icon  style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000'name='map'/>
        <TextInput value={adress}
        onChangeText={setAdress} style={styles.input} placeholder='Adres'/>
        </View>
        <TouchableOpacity onPress={()=>{setToggleCheckBox(!toggleCheckBox);console.log(toggleCheckBox)}}>
     <Text> 
     <MaterialCommunityIcons size={20} name={toggleCheckBox!=true?'checkbox-blank-circle-outline':'checkbox-marked-circle-outline'}/> Faturam aynı adrese gönderilsin
     </Text>
      </TouchableOpacity>

        {toggleCheckBox!=true?
        <View>
        <Divider/>
<View style={{flexDirection:'row'}}>
    <FontAwesome5Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='money-bill-alt'/>
    
<Text style={{marginLeft:5,marginTop:9}}>Fatura Bilgileri</Text>
<Divider/>
</View>
<Text style={styles.text}>İletişim Bilgileri</Text>
    <Divider />
    <View style={styles.container2}>
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='user-circle'/>
    <TextInput value={namebill}
        onChangeText={setNamebill} style={styles.input} placeholder='Ad'/>
    
        </View>
            <View style={{flexDirection:'row'}}>
            <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='user-circle'/>
        <TextInput value={surNamebill}
        onChangeText={setSurnamebill} style={styles.input} placeholder='Soyad'/>
        </View>
    <View style={{flexDirection:'row'}}>
            <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='phone'/>

<TextInput value={phonebill}
        onChangeText={setPhonebill} style={styles.input} placeholder='Telefon'/>
    </View>   
     </View>
    <View style={{flexDirection:'row'}}>
<Icon  style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000'name='map-marker'/>
        <Text style={{marginLeft:5,marginTop:9}}>Adres Bilgileri</Text>
        </View>
    <Divider />
        <Text style={styles.text}>Şehir Seçin</Text>
<SelectList 
        setSelected={(val) => {setValuebill(val)}} 
        onSelect={()=>{(dispatch(town({city_id:value}))).then(()=>{
         setnewarray2bill(  postStatus.data3.map((item) => {
          return {key: item.id, value: item.title}
        }))
        //Set Data Variable
        setData2bill(newarray2bill);
      })}}
        data={data} 
        save="key"
              search={false} 
      defaultOption={{ key:'1', value:'ADANA' }}   //default selected option

    />
     <Text style={styles.text}>İlçe Seçin</Text>
<SelectList 
        setSelected={(val) => setValue2bill(val)} 
        data={postStatus.data3!=undefined?postStatus.data3.map((item) => {
          return {key: item.id, value: item.title}
        }):''} 
        save="key"
              search={false} 
      defaultOption={{ key:'1', value:postStatus.data3!=undefined?postStatus.data3[0].title:''}}   //default selected option

    />
     <View style={{flexDirection:'row'}}>
<Icon  style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000'name='map'/>
        <TextInput value={adressbill}
        onChangeText={setAdressbill} style={styles.input} placeholder='Adres'/>
        </View>
        </View>
        :''
        
        }

<TouchableOpacity         onPress={() => {
  if(toggleCheckBox==true){
  dispatch(save_address({name:name,surname:surName,email:authStatus.data.email,telephone:phone,city:value,town:value2,clear_address:adress,billing_name:name,billing_surname:surName,billing_email:authStatus.data.email,billing_telephone:phone,billing_city:value,billing_town:value2,billing_clear_address:adress}));alert('Adres kaydedildi.')
  }else
    dispatch(save_address({name:name,surname:surName,email:authStatus.data.email,telephone:phone,city:value,town:value2,clear_address:adress,billing_name:namebill,billing_surname:surNamebill,billing_email:authStatus.data.email,billing_telephone:phonebill,billing_city:valuebill,billing_town:value2bill,billing_clear_address:adressbill}));alert('Adres kaydedildi.')
  }}

  style={{ backgroundColor: '#ff0000',
        padding: 10,
        margin: 20,
        marginHorizontal: 30,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center'}}>
    <Text style={{color:'#fff'}}>Kaydet</Text>
        </TouchableOpacity>


      </ScrollView>       
       </View>)
}
const styles = StyleSheet.create({
    container2:{
display:'flex'
    },
  container: {
    paddingTop: 20,
    overflow:'visible'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  text:{
    paddingLeft:30
  }
  ,input:{
        marginLeft:10,
height:35,
borderWidth:1,
borderColor:'#909090',
width:'90%',
justifyContent:'center',
alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10
  }
});