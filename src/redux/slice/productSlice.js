import {createSlice,createEntityAdapter} from '@reduxjs/toolkit';
import { addBasket, favoritte, getBasket, getUrl, productDetail, productList,toggleFavoritte,searchProduct } from '../../api';

const productAdapter=createEntityAdapter();
const initialState=productAdapter.getInitialState();

export const productSlice=createSlice({
    name:'product',
   initialState: {
    status: undefined,
    addStatus: undefined,
    data: undefined,
    data2:undefined,
    data3:undefined,
        data4:undefined,
        data5:undefined,
        data6:undefined,
        data7:undefined,
        data8:undefined,
        data9:undefined,
    getResponse: undefined,
    isLoading: false,
    error: undefined,
  },reducers:{},
    extraReducers(builder){

        builder.addCase(productList.fulfilled,(state,action)=>{
            state.data=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(productDetail.fulfilled,(state,action)=>{
            state.data2=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(toggleFavoritte.fulfilled,(state,action)=>{
            state.data3=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(addBasket.fulfilled,(state,action)=>{
            state.data4=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(getBasket.fulfilled,(state,action)=>{
            state.data5=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
          builder.addCase(favoritte.fulfilled,(state,action)=>{
            state.data6=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(getUrl.fulfilled,(state,action)=>{
            state.data7=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(searchProduct.fulfilled,(state,action)=>{
            state.data8=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
    },

});
export  default productSlice.reducer;

