import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//const BASE_URL = 'https://onucnisanikibi-001-site1.ctempurl.com/api/';
//const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRmF0aWgiLCJqdGkiOiIxYmRmNjJmOS03MjhiLTQ4YTMtODI1OC02YmViZWVhYWNiZjMiLCJzdWIiOiI0YjhiNmYyNC0yMTBmLTQ2YmQtOGRjMC03YWZhNDE1NDk2N2UiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcxMzM1NTU0MCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE4MyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcxODMifQ.u2AOBdYxntaA6cQrE9JtBerPEA5r9NpteXddqAIPVUw'
//axios.defaults.baseURL = BASE_URL;
//axios.defaults.headers['Authorization'] = "Bearer "+token;
const BASE_URL='https://demo.pigasoft.com/eticaret/apiv1/';
const API_KEY='SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
axios.defaults.baseURL=BASE_URL;
axios.defaults.headers['X-API-Key'] = API_KEY;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

const getTodosAsync = createAsyncThunk('task/getTodosAsync', async () => {
  try {
    const res = await axios.get('sliders');
   // console.log('dataasdasdad'+res.data.data[1].rank);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
});

const getfirstCategories = createAsyncThunk('category/getfirstCategories', async () => {
  try {
    const res = await axios.get('firstCategories');
   // console.log('dataasdasdad'+res.data.data[1].rank);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
});

const postSecondCategories=createAsyncThunk(
  'category/postSecondCategories',async(data,thunkAPI)=>{
    const {first_category_id}=data;
    const params=new FormData();
    params.append('first_category_id',first_category_id);
    try{
      const res=await axios.post('secondCategories',params);
            console.log('faaaaf'+res);
      return res.data.data;
      //thunkAPI.dispatch()
    }catch(error){
      console.error(error);
    }
  }
)
const postThirdCategories=createAsyncThunk(
  'category/postThirdCategories',async(data,thunkAPI)=>{
    const {second_category_id}=data;
    const params=new FormData();
    params.append('second_category_id',second_category_id);
    try{
      const res=await axios.post('thirdCategories',params);
      return res.data.data;
    }catch(error){
      console.error(error);
    }
  }
)
const searchProduct=createAsyncThunk(
  'task/searchProduct',async(data,thunkAPI)=>{
    const {keywords,page,per_page,sorting}=data;
    const params=new FormData();
    params.append('keywords',keywords);
    params.append('per_page',per_page);
    params.append('page',page);
    params.append('sorting',sorting);
    try{
      const res=await axios.post('searchProduct',params);
      return res.data.data;
    }catch(error){
      console.error(error);
    }
  }
)
const productList=createAsyncThunk(
  'product/productList',async(data,thunkAPI)=>{
    const {per_page,page,category,category_id,sorting}=data;
    const params=new FormData();
    params.append('per_page',per_page);
    params.append('page',page);
    params.append('category',category);
    params.append('category_id',category_id);
    params.append('sorting',sorting);
    try{
      const res=await axios.post('productList',params);
      return res.data.data;
    }catch(error){
      console.error(error);
    }
  }
)

const productDetail=createAsyncThunk(
  'product/productDetail',async(data,thunkAPI)=>{
    const {product_id}=data;
    const params=new FormData();
    params.append('product_id',product_id);
    try {
      const res=await axios.post('productDetail',params);
      return res;
    } catch (error) {
      console.error(error)
    }
  }
)
const  toggleFavoritte=createAsyncThunk(
  'product/toggleFavoritte',async(data,thunkAPI)=>{
    const {product_id}=data;
    const params=new FormData();
    params.append('product_id',product_id);
    try{
      const res=await axios.post('toggleFavoritte',params);
      console.log('toggle'+res);
      thunkAPI.dispatch(favoritte()); 
      return res;
    }catch(error){
      console.error('faa'+error);
    }
  }
)
const addBasket=createAsyncThunk(
  'product/addBasket',async(data,thunkAPI)=>{
    const {product_id,qty}=data;
    const params=new FormData();
    params.append('product_id',product_id);
    params.append('qty',qty);
    try {
      const res=await axios.post('addBasket',params);
      thunkAPI.dispatch(getBasket());
      return res.data.message;
    } catch (error) {
      console.error(error);
    }
  }
)
const getBasket = createAsyncThunk('product/getBasket', async () => {
  try {
    const res = await axios.get('getBasket');
   // console.log('dataasdasdad'+res.data.data[1].rank);
    return res;
  } catch (error) {
    console.error(error);
  }
});

const favoritte =createAsyncThunk('product/favoritte',async()=>{
  try{
    const res=await axios.get('favoritte');
    return res.data;
  }catch(error){
    console.error(error);
  }
})
const address=createAsyncThunk('user/address',async()=>{
  try {
    const res=await axios.get('address');
    return res.data;
  } catch (error) {
    console.error(error);
  }
})
const city=createAsyncThunk('user/city',async()=>{
  try {
    const res=await axios.get('city');
    return res.data;
  } catch (error) {
    console.error(error);
  }
})
const town=createAsyncThunk(
  'user/town',
   async(data,thunkAPI)=>{
    const {city_id}=data;
    const params=new FormData();
    params.append('city_id',city_id);
    try {
      const res=await axios.post('town',params);
      return res.data;
    } catch (error) {
      console.error(error);
    }
}
)
const save_address=createAsyncThunk(
  'user/save_address',
  async(data,thunkAPI)=>{
    const {name,surname,email,telephone,city,town,clear_address,billing_name,billing_surname,billing_email,billing_telephone,billing_city,billing_town,billing_clear_address}=data;
    const params = new FormData();
    params.append('name',name);
    params.append('surname',surname);
    params.append('email',email);
    params.append('telephone',telephone);
    params.append('city',city);
    params.append('town',town);
    params.append('clear_address',clear_address);
    params.append('billing_name',billing_name);
    params.append('billing_surname',billing_surname);
    params.append('billing_email',billing_email);
    params.append('billing_telephone',billing_telephone);
    params.append('billing_city',billing_city);
    params.append('billing_town',billing_town);
    params.append('billing_clear_address',billing_clear_address);
 try {
  const res=await axios.post('save_address',params);
  return res.data;
 } catch (error) {
  console.error(error);
 }
    
  }
)
const getUrl=createAsyncThunk(
  'product/getUrl',
  async(data,thunkAPI)=>{
    const {url_string,per_page,page,sorting}=data;
    const params=new FormData();
    params.append('url_string',url_string);
    params.append('per_page',per_page);
    params.append('page',page);
    params.append('sorting',sorting);
    try {
      const res=await axios.post('getUrl',params);
      
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
)
const removeAddress=createAsyncThunk(
  'user/removeAddress',
  async(data,thunkAPI)=>{
    const {address_id}=data;
    const params=new FormData();
    params.append('address_id',address_id);
    try {
      const res= await axios.post('removeAddress',params);
      thunkAPI.dispatch(address());
      return res.data;
    } catch (error) {
      
      console.error(error);
    }
  }
)
const changePassword=createAsyncThunk(
  'user/changePassword',
  async(data,thunkAPI)=>{
    const {old_password,new_password}=data;
    const params=new FormData();
    params.append('old_password',old_password);
    params.append('new_password',new_password);
    try {
      const res=await axios.post('changePassword',params);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
)
const saveMemberDelivery=createAsyncThunk(
  'user/saveMemberDelivery',
  async(data,thunkAPI)=>{
    const {address_id}=data;
    const params=new FormData();
    params.append('address_id',address_id);
    try {
      const res=await axios.post('saveMemberDelivery',params);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
)
const cargo=createAsyncThunk('user/cargo',async()=>{
  try {
    const res=await axios.get('cargo');
    return res.data;
  } catch (error) {
    console.error(error);
  }
})
const createOrder=createAsyncThunk(
  'user/createOrder',
  async(data,thunkAPI)=>{
    const {payment_type,cargo_id,order_note}=data;
    const params=new FormData();
    params.append('payment_type',payment_type);
    params.append('cargo_id',cargo_id);
    params.append('order_note',order_note);
    try {
      const res=await axios.post('createOrder',params);
      thunkAPI.dispatch(getBasket());
      return res;
    } catch (error) {
      console.error(error);
    }
  }
  
  )
const register=createAsyncThunk(
  'user/register',
  async(data,thunkAPI)=>{
    const {email,password,telephone,name}=data;
    const params=new FormData();
    params.append('email',email);
    params.append('password',password);
    params.append('telephone',telephone);
    params.append('name',name);
    try {
      const res=await axios.post('register',params);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
)
const lostPassword=createAsyncThunk(
  'user/lostPassword',
  async(data,thunkAPI)=>{
    const {email}=data;
    const params=new FormData();
    params.append('email',email);
    try {
      const res=await axios.post('lostPassword',params);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
)
const orders=createAsyncThunk('user/orders',async()=>{
  try {
    const res=await axios.get('orders');
    return res.data;
  } catch (error) {
    console.error(error);
  }
})
const orderDetail=createAsyncThunk(
  'user/orderDetail',
  async(data,thunkAPI)=>{
    const {order_id}=data;
    const params=new FormData();
    params.append('order_id',order_id);
    try {
      const res=await axios.post('orderDetail',params);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
  )
const addTodoAsync = createAsyncThunk(
  'task/addTodoAsync',
  async (data, thunkAPI) => {
    const {title} = data;
    const params = new FormData();
    params.append('title', title);
    try {
      const res = await axios.post('addToList', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {}
  },
);
const editTodoAsync = createAsyncThunk(
  'task/editTodoAsync',
  async (data, thunkAPI) => {
    const {title, id} = data;
    const params = new FormData();
    params.append('title', title);
    params.append('id', id);
    try {
      const res = await axios.post('updateListItem', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {}
  },
);

const deleteTodoAsync = createAsyncThunk(
  'task/deleteTodoAsync',
  async (data, thunkAPI) => {
    const {id} = data;
    const params = new FormData();
    params.append('id', id);
    try {
      const res = await axios.post('removeListItem', params);
      thunkAPI.dispatch(getTodosAsync());
      return res.data;
    } catch (error) {
      return {error: true};
    }
  },
);

const loginProcess = createAsyncThunk(
  'authentication/loginProcess',
  async (data, thunkAPI) => {
    const {email, password} = data;
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    try {
      const res = await axios.post('login', params);
      res.data !== undefined &&
        AsyncStorage.setItem('@USERDATA', JSON.stringify(data));
      //thunkAPI.dispatch(getTodosAsync());

      return res.data;
    } catch (error) {}
  },
);

const logoutProcess = createAsyncThunk(
  'authentication/logoutProcess',
  async () => {
    try {
      const res = await axios.get('logout');
      AsyncStorage.removeItem('@USERDATA');
      return res.data;
    } catch (error) {}
  },
);

export {
  logoutProcess,
  loginProcess,
  addTodoAsync,
  getTodosAsync,
  deleteTodoAsync,
  editTodoAsync,
  getfirstCategories,
  postSecondCategories,
  postThirdCategories,
  searchProduct,
  productList,
  productDetail,
  toggleFavoritte,
  addBasket,
  getBasket,
  favoritte,
  address,
  city,
  town,
  save_address,
  removeAddress,
  changePassword,
  saveMemberDelivery,
  cargo,
  createOrder,getUrl,register,lostPassword,orders,orderDetail
};
