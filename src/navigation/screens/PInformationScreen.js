import React, {useState} from 'react';
import {Text, View,Image,StyleSheet, ImageBackground, TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default function PInformationScreen({ navigation }) {
const authStatus=useSelector(state=>state.authentication);

    return(
<View style={{ flex:0,alignItems: 'center', justifyContent: 'center',borderRadius:1,backgroundColor:'#fff'}}>
<Text >
               </Text>

    <View style={styles.container}>
        <Text style={{color:'#ff0000',padding:5 }} >
               <Icon style={{}} name="user-circle" size={20} color="#ff0000" /> İsim Soyisim: {authStatus.data.name} {authStatus.data.surname}
                </Text>
                 </View>
                   <View style={styles.container}>
        <Text style={{color:'#ff0000',padding:5 }} >
               <Icon style={{}} name="envelope" size={20} color="#ff0000" /> E-Posta adresi: {authStatus.data.email}
                </Text>
                 </View>
                          <View style={styles.container}>
        <Text style={{color:'#ff0000',padding:5 }} >
               <Icon style={{}} name="phone-alt" size={20} color="#ff0000" /> İsim Soyisim: {authStatus.data.telephone}
                </Text>
                 </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
      width:'90%',
      height:40,
        flexDirection: 'column',
        padding: 5,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 15,
        backgroundColor: '#FFF',
        elevation: 2,
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