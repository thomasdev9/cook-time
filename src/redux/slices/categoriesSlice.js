import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesAPI } from '../../api/recipes-api';

const initialState = {
  pizza: {
    data: {},
  },
  steak: {
    data: {},
  },
  salad: {
    data: {},
  },
  burger: {
    data: {},
  },
  dessert: {
    data: {},
  },
  vegan: {
    data: {},
  },
  sushi: {
    data: {},
  },
  loading: false,
  error: null,
  success: false,
};

export const fetchRecipesByCategory = createAsyncThunk('categories/fetchRecipesByCategory', async ({ category }) => {
  const data = await RecipesAPI.getRecipes({ query: category });
  return {
    category: category,
    data: data,
  };
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRecipesByCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipesByCategory.fulfilled, (state, { payload }) => {
      state[payload?.category].data = payload?.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(fetchRecipesByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice.reducer;
