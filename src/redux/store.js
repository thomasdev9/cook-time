import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categoriesReducer from './slices/categoriesSlice';

const reducer = combineReducers({
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer,
});
