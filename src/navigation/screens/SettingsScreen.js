import React, {useEffect, useState} from 'react';
import { View, Text ,StyleSheet,Button, TouchableWithoutFeedback, FlatList,TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { AccountListItem, CategoryListItem, Input, TodoListItem} from '../../components';
import { loginProcess, logoutProcess } from '../../api';
import style from '../screens/SettingsScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Divider } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {
    const dispatch = useDispatch();

  const [mail, setMail] = useState('info@test.com');
  const [password, setPassword] = useState('123456');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const login = () => {
    dispatch(loginProcess({email: mail, password: password}));
  };
   const logout = () => {
    dispatch(logoutProcess());
  };
  const register = () => {
    navigation.navigate('RegisterScreen');
  };
  const postStatus = useSelector((state) => state.authentication)
console.log(postStatus.isSignedIn   );

  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const data=[
    {id:0,title:'Siparişlerim',icon:'history',navpage:'OrdersScreen'},
    {id:1,title:'Favorilerim',icon:'heart',navpage:'FavoritesScreen'},
    {id:2,title:'Adreslerim',icon:'map-marker',navpage:'AdressesScreen',extra:'button'},
    {id:3,title:'Kullanıcı Bilgileri',icon:'user',navpage:'PInformationScreen'},
    {id:4,title:'Şifre Değiştir',icon:'key',navpage:'ChangePasswordScreen'},
    {id:5,title:'Çıkış Yap',icon:'sign-out',button:'logout'}
    ]
  const renderItem = ({item}) => {
  
    return <AccountListItem {...{ item,navigation}} />;
  };
    return (
    postStatus.isSignedIn!=true?
    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center',borderRadius:1,backgroundColor:'#fff'}}>
<Text >
               </Text>

    <View style={styles.container}>
        <Text style={{color:'#ff0000',marginTop:35,marginRight:5 }} >
               <Icon style={{}} name="user" size={20} color="#ff0000" /></Text>
                <TextInput value={mail}
        onChangeText={setMail}  style={styles.input} placeholder='Eski Şifre'></TextInput>
                 </View>
                   <View style={styles.container}>
        <Text style={{color:'#ff0000',marginTop:35,marginRight:5 }} >
               <Icon style={{}} name="key" size={20} color="#ff0000" /></Text>
                <TextInput value={password}
        onChangeText={setPassword} secureTextEntry={passwordVisibility}   style={styles.input} placeholder='Yeni  Şifre'></TextInput>
                 </View>
<TouchableOpacity         onPress={() => {login()}}
 style={{ backgroundColor: '#ff0000',
    padding: 10,
    margin: 20,
    marginHorizontal: 30,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#fff'}}>Giriş Yap</Text>
    </TouchableOpacity>
<TouchableOpacity         onPress={() => {register()}}
 style={{ backgroundColor: '#fff',
    padding: 10,
    borderColor:'#ff0000',
    borderWidth:1,
    marginHorizontal: 30,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center'}}>
<Text style={{color:'#ff0000'}}>Kayıt Ol</Text>
    </TouchableOpacity>
    <TouchableOpacity><Text onPress={()=>navigation.navigate('ResetPasswordScreen')}>Şifremi unuttum</Text></TouchableOpacity>

    </View>
    :
    <View style={{backgroundColor:'#fff'}}>
   


<FlatList data={data} 
                renderItem={renderItem}
                 keyExtractor={item => item.id}
                 /> 


      <Divider/>
       
      
      </View>
    );
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