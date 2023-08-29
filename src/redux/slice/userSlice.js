import {createSlice,createEntityAdapter} from '@reduxjs/toolkit';
import { addBasket, address,city,town, favoritte, getBasket, userDetail, userList,toggleFavoritte, save_address, removeAddress, changePassword, saveMemberDelivery, cargo, createOrder, register, lostPassword, orders, orderDetail } from '../../api';

const userAdapter=createEntityAdapter();

export const userSlice=createSlice({
    name:'user',
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
        data10:undefined,
        data11:undefined,
        data12:undefined,
                data13:undefined,
    getResponse: undefined,
    isLoading: false,
    error: undefined,
  }
  ,reducers:{},
    extraReducers(builder){

            builder.addCase(address.fulfilled,(state,action)=>{
            state.data=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(city.fulfilled,(state,action)=>{
            state.data2=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(town.fulfilled,(state,action)=>{
            state.data3=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(save_address.fulfilled,(state,action)=>{
            state.data4=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(removeAddress.fulfilled,(state,action)=>{
            state.data5=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(changePassword.fulfilled,(state,action)=>{
            state.data6=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
          builder.addCase(saveMemberDelivery.fulfilled,(state,action)=>{
            state.data7=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(cargo.fulfilled,(state,action)=>{
            state.data8=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(createOrder.fulfilled,(state,action)=>{
            state.data9=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.data10=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
        builder.addCase(lostPassword.fulfilled,(state,action)=>{
            state.data11=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(orders.fulfilled,(state,action)=>{
            state.data12=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
         builder.addCase(orderDetail.fulfilled,(state,action)=>{
            state.data13=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
    },

});
export  default userSlice.reducer;

