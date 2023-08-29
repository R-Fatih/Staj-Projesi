import React, {useEffect, useState} from 'react';

import { Text,Image, View,Input,StyleSheet, TextInput,Button, TouchableOpacity } from "react-native"
import { Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { register } from '../../api';

export default function RegisterScreen({ navigation }) {
       const dispatch = useDispatch();
    const reg=useSelector(state=>state.user);
        const [name, setName] = useState('');
      const [mail,setMail]=useState('');
            const [password,setPassword]=useState('');

      const [phone,setPhone]=useState('');
      const [value,setValue]=useState(1);
            const [value2,setValue2]=useState(1);

      const [data,setData] = useState([]);
      const [data2,setData2] = useState([]);
    return(<View style={styles.container}> 
    <Text style={styles.text}>İletişim Bilgileri</Text>
    <Divider />
    <View style={styles.container2}>
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='user-circle'/>
    <TextInput value={name}
        onChangeText={setName} style={styles.input} placeholder='Ad Soyad'/>
    
        </View>
        
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='phone'/>

<TextInput value={phone}
        onChangeText={setPhone} style={styles.input} placeholder='Telefon'/>
    </View>
    </View>
        <View style={{flexDirection:'row'}}>

        <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='info-circle'/>

        <Text style={{marginTop:10,marginLeft:10}}>E-Posta&Şifre</Text>
            </View>

    <Divider />
       

        <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='envelope'/>

<TextInput value={mail}
        onChangeText={setMail} style={styles.input} placeholder='E-Posta'/>
    </View>
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:10,marginLeft:5}} size={25} color='#ff0000' name='key'/>

<TextInput value={password}
        onChangeText={setPassword} style={styles.input} placeholder='Şifre'/>
    </View>
    <TouchableOpacity         onPress={() => {dispatch(register({email:mail,password:password,telephone:phone,name:name})).then(alert(reg.data10!=undefined?reg.data10.message:'Mesaj alınamadı'))}}
 style={{ backgroundColor: '#ff0000',
    padding: 10,
    margin: 20,
    marginHorizontal: 30,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#fff'}}>Kaydet</Text>
    </TouchableOpacity>
     
       </View>)
}
const styles = StyleSheet.create({
    container2:{
display:'flex'
    },
  container: {
    paddingTop: 20,
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
borderWidth:1,
borderColor:'#909090',
width:'90%',
height:35
,justifyContent:'center',
alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10
  }
});