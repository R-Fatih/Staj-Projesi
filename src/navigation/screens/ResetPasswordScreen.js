import React, {useEffect, useState} from 'react';
import { Text,Image, View,Input,StyleSheet, TextInput,Button, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import { lostPassword } from '../../api';
import { useDispatch, useSelector } from 'react-redux';

export default function ResetPasswordScreen({ navigation }) {
          const [name, setName] = useState('');
const dispatch=useDispatch();
const reg=useSelector(state=>state.user);
    return(
        <View>
    <View style={{flexDirection:'row'}}>
    <Icon style={{marginTop:15,marginLeft:5}} size={25} color='#ff0000' name='user'/>
    <TextInput value={name}
        onChangeText={setName} style={styles.input} placeholder='E-Posta'/>
       
        </View>
        <View>
            <TouchableOpacity         onPress={() => {dispatch(lostPassword({email:name})).then(alert(reg.data11!=undefined?reg.data11.message:'Mesaj alınamadı'))}}
 style={{ backgroundColor: '#ff0000',
    padding: 10,
    margin: 20,
    marginHorizontal: 30,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#fff'}}>Şifreyi Sıfırla</Text>
    </TouchableOpacity>
        </View>
        </View>
        )
}const styles = StyleSheet.create({
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