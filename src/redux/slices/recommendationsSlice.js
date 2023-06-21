import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesAPI } from '../../api/recipes-api';

const initialState = {
  recommended: {
    data: {},
  },
  recently: {
    data: {},
  },
  popular: {
    data: {},
  },
  trending: {
    data: {},
  },
  loading: false,
  error: null,
  success: false,
};

export const fetchRecommendations = createAsyncThunk('recommendations/fetchRecommendations', async () => {
  const data = await RecipesAPI.getRecipes({ query: 'dinner' });
  return data;
});

export const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRecommendations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecommendations.fulfilled, (state, { payload }) => {
      const recipes = payload?.hits;
      state.recommended = recipes.slice(0, 5);
      state.recently = recipes.slice(5, 10);
      state.popular = recipes.slice(10, 15);
      state.trending = recipes.slice(15, 20);
      state.loading = false;
      state.success = true;
    });
    builder.addCase(fetchRecommendations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default recommendationsSlice.reducer;
