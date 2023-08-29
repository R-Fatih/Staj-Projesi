import React, {useEffect, useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback,Button} from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-gesture-handler';
import { changePassword } from '../../api';

export default function ChangePasswordScreen({ navigation }) {
const authStatus=useSelector(state=>state.user);
const dispatch=useDispatch();
const [old,setOld]=useState('');
const [newp,setNewp]=useState('');

    return(
<View style={{ flex:1,alignItems: 'center', justifyContent: 'center',borderRadius:1,backgroundColor:'#fff'}}>
<Text >
               </Text>

    <View style={styles.container}>
        <Text style={{color:'#ff0000',marginTop:35,marginRight:5 }} >
               <Icon style={{}} name="user-cog" size={20} color="#ff0000" /></Text>
                <TextInput value={old}
        onChangeText={setOld}  style={styles.input} placeholder='Eski Şifre'></TextInput>
                 </View>
                   <View style={styles.container}>
        <Text style={{color:'#ff0000',marginTop:35,marginRight:5 }} >
               <Icon style={{}} name="user-cog" size={20} color="#ff0000" /></Text>
                <TextInput value={newp}
        onChangeText={setNewp}  style={styles.input} placeholder='Yeni  Şifre'></TextInput>
                 </View>
                       <Button onPress={()=>{dispatch(changePassword({old_password:old,new_password:newp})).then( alert(authStatus.data6.message))}} style={{borderRadius:15}} color='#ff0000' title="Şifreyi Değiştir"></Button>
    </View>
    )
}
const styles = StyleSheet.create({
    input:{
borderWidth:1,
borderColor:'#909090',
width:'90%',
justifyContent:'center',
alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10
  },
    container: {
      width:'90%',
      height:90,
        flexDirection: 'row',
        
        
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});