import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import recommendationsReducer from './slices/recommendationsSlice';

const reducer = combineReducers({
  recommendations: recommendationsReducer,
});

export const store = configureStore({
  reducer,
});
