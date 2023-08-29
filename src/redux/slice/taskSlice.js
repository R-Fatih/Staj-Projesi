import {createSlice,createEntityAdapter} from '@reduxjs/toolkit';
import {
  addTodoAsync,
  getTodosAsync,
  deleteTodoAsync,
  editTodoAsync,
  searchProduct,
} from '../../api';

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const taskSlice = createSlice({
  name: 'task',
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
    
  extraReducers(builder) {
 builder.addCase(getTodosAsync.fulfilled,(state,action)=>{
            state.data=
            action.payload.data!==undefined
            ?action.payload.data
            :action.payload;
            state.isLoading=false;
        })
           
  },
});

export default taskSlice.reducer;
export const {
  selectAll: selectAllUsers,
} = usersAdapter.getSelectors((state) => state.task)
