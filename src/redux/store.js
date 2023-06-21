import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categoriesReducer from './slices/categoriesSlice';
import recommendationsReducer from './slices/recommendationsSlice';

const reducer = combineReducers({
  categories: categoriesReducer,
  recommendations: recommendationsReducer,
});

export const store = configureStore({
  reducer,
});
