import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {authenticationSlice, categorySlice, productSlice, taskSlice, userSlice} from './slice';

import logger from 'redux-logger';

const reducer = combineReducers({
  task: taskSlice,
  authentication: authenticationSlice,
  category:categorySlice,
  product:productSlice,
  user:userSlice
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
