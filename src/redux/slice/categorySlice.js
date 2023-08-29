import {createSlice,createEntityAdapter} from '@reduxjs/toolkit';
import { getfirstCategories,postSecondCategories, postThirdCategories, productList } from '../../api';

const categoryAdapter=createEntityAdapter();
const initialState=categoryAdapter.getInitialState();

export const categorySlice=createSlice({
    name:'category',
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
        builder.addCase(getfirstCategories.fulfilled,(state,action)=>{
            state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.isLoading = false;
        })
builder.addCase(postSecondCategories.fulfilled,(state, action) => {
        state.data2 =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.isLoading = false;
      })
        builder.addCase(postThirdCategories.fulfilled,(state,action)=>{
            state.data3=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(productList.fulfilled,(state,action)=>{
            state.data4=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
    },

});
export  default categorySlice.reducer;
