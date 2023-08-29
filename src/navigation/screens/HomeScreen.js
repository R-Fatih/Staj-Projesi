import React, {useEffect, useState} from 'react';

import { View, Text,FlatList,ImageBackground,Button, TouchableOpacity } from 'react-native';
import { selectAllUsers } from '../../redux/slice/taskSlice';
import {useDispatch, useSelector} from 'react-redux';
import { Input, TodoListItem} from '../../components';
import {logoutProcess,getTodosAsync, editTodoAsync, addTodoAsync, searchProduct} from '../../api';
import HomeScreenStyle from './HomeScreenStyle';
import  Icon  from 'react-native-vector-icons/AntDesign';
import ProductView from './ProductView';
export default function HomeScreen({ navigation }) {
    const image = { };
  const [value, setValue] = useState('');
  const[searchProduct2,setSearchProduct]=useState(false);
  const dispatch = useDispatch();
//dispatch(getTodosAsync());
let users = useSelector(state=>state.task)
console.log('quaresma'+users);
const renderItem = ({item}) => {
  
    return <TodoListItem {...{ item,navigation}} />;
  };
useEffect(() => {
    users !== undefined
      ?  dispatch(getTodosAsync())
      : null;
  }, []);
  const changeBool = () => {
    setSearchProduct(!searchProduct2);
  };
    return (
        <View >
        <View style={{flexDirection:'row',alignSelf:'center'}}>
     <Input
        value={value}
        setValue={setValue}
        theme="primary"
        
      />
      <TouchableOpacity  onPress={() => {dispatch(searchProduct({keywords:value,page:0,per_page:50,sorting:'asc'}));changeBool();}}>
                     <Icon style={{marginLeft:-55,marginTop:25}} name={searchProduct2==false?"search1":'close'} size={30} color="#900" />
                     </TouchableOpacity>
</View>
      
     <Text
                onPress={() =>       dispatch(getTodosAsync())}
                style={{ fontSize: 26, fontWeight: 'bold' }}>{}</Text>
                
              { searchProduct2===false? 
              <View style={{justifyContent:'center',alignContent:'center',alignSelf:'center'}}>
              <FlatList data={users.data} 
                renderItem={renderItem}
                 keyExtractor={item => item.id}
                 /> 
                 </View>:
                 <ProductView />}
        </View>
    );
}
