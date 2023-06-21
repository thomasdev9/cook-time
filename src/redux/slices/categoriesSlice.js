import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steak: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
  salad: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
  burger: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
  desert: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
  vegan: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
  sushi: {
    data: {},
    loading: {},
    error: null,
    success: false,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
