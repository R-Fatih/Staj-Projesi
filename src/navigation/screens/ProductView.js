import React, {useEffect, useState} from 'react';

import { View, Text,FlatList,ImageBackground,Button,StyleSheet,Image, TouchableOpacity,Modal,Pressable } from 'react-native';
import { selectAllUsers } from '../../redux/slice/taskSlice';
import {useDispatch, useSelector} from 'react-redux';
import { useRoute } from "@react-navigation/native"

import { CategoryListItem, Input, TodoListItem} from '../../components';
import {logoutProcess,getTodosAsync, editTodoAsync, addTodoAsync, searchProduct,productList} from '../../api';
import HomeScreenStyle from './HomeScreenStyle';
import { ProductListItem } from '../../components/product-list-item';
import { getUrl } from '../../api';
import styles from '../../components/product-list-item/style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
export default function ProductView({ navigation }) {
     
 const dispatch = useDispatch();
    const route = useRoute()
  const id = route.params?.id
  const category=route.params?.category
  const home=route.params?.main;
  const button_url=route.params?.button_url
//dispatch(getTodosAsync());
  let products = useSelector((state) => state.product)
//console.log('quaresma'+users);
const [page,setpage]=useState(1);
  const [modalVisible, setModalVisible] = useState(false);
const [sort,setSort]=useState('asc');
 

useEffect(() => {
       home==true?dispatch(getUrl({url_string:button_url,per_page:(10*page),page:0,sorting:sort})): dispatch(productList( {per_page:(10*page),page:0,category:category,category_id:id,sorting:sort}))
      ;
  }, [sort]);

const handleLoadMore = async() => {

        // her you put the logic to load some data with pagination
        // for example a service who return the data of the page "this.state.currentPage"
setpage(page+1);
     home==true?dispatch(getUrl({url_string:button_url,per_page:(10*page),page:0,sorting:sort})): dispatch(productList( {per_page:(10*page),page:0,category:category,category_id:id,sorting:sort}));
   //products = useSelector((state) => state.category);

    }
const renderItem = ({item}) => {
    return <ProductListItem {...{ item,navigation}} />;
  };
  return (
        <View>

    <View>
    <TouchableOpacity onPress={()=>setModalVisible(true)}>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
      <FontAwesomeIcon color='#ff0000' size={25} name='list-ul'/>
      <Text style={{color:'#ff0000',marginLeft:10}}>Sırala</Text>
      </View>
    </TouchableOpacity>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles2.centeredView}>
          <View style={styles2.modalView}>
             <Pressable
              style={[styles2.button, styles2.buttonClose]}
              onPress={() =>{setSort('asc'); setModalVisible(!modalVisible);}}>
              <Text style={styles2.textStyle}>Fiyata göre artan</Text>
            </Pressable>
            <Pressable
              style={[styles2.button, styles2.buttonClose]}
              onPress={() => {setSort('desc');setModalVisible(!modalVisible)}}>
              <Text style={styles2.textStyle}>Fiyate göre azalan</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
<FlatList data={home==true?products.data7:category==1||category==2?products.data:products.data8   }
                initialNumToRender={(10*page)}   // how many item to display first
           onEndReachedThreshold={10} // so when you are at 5 pixel from the bottom react run onEndReached function
           onEndReached={() => {
               handleLoadMore();
           }}
       
              contentContainerStyle={styles.container}

                renderItem={renderItem}
                 keyExtractor={item => item.id}
                     numColumns={2}
                 /> 
                     </View>
 );
}
const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});